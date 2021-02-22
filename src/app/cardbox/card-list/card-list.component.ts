import {Component, OnDestroy, OnInit,} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BehaviorSubject, combineLatest, Observable, Subject} from 'rxjs';
import {map, switchMap, takeUntil} from 'rxjs/operators';

import {HttpApiService} from '../../topics/services/http-api.service';
import {LearningCard} from '../../models/card-box/LearningCard';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit, OnDestroy {


  topicKey$:Observable<string>;
  learningCards$:Observable<any>;
  elementToShow$:BehaviorSubject<number>= new BehaviorSubject<number>(0);
  activeCard$:Observable<any>;
  destroyBigMac$= new Subject()

  selectInfo:boolean=false;
  isActivate:boolean=false
  card:LearningCard;

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private topicService:HttpApiService
  ) { }


  getAllCards=()=>  this.topicKey$.pipe(switchMap(key=>this.topicService.getAllCardsFromHttp(key)));

  /**
   * switchmap: Projects each source value to an Observable which is merged in the output Observable,
   *            emitting values only from the most recently projected Observable.
   */
  ngOnInit(): void {
   this.topicKey$= this.activatedRoute.queryParams.pipe(map(key=>key.topicKey));
  }

  /**
   * @param selected lvl to filter card list
   * reset this Behavior subject if select cards from an other lvl
   */

  setLvl(selected: number) {
    this.learningCards$= this.filterByCorrectAnswerCount(selected);
    this.activeCard$ = combineLatest([this.learningCards$, this.elementToShow$]).pipe(
      map(([allCards, elementToShow]) => {
        allCards.length<=this.elementToShow$.value&&this.elementToShow$.next(0);
        return allCards[elementToShow];
      }),takeUntil(this.destroyBigMac$)
    );
  }

  /**
   * combineLatest from Rxjs: Pass arguments in a single array instead combineLatest([a, b, c]) and returns an Observable
   */

  nextElementOnClick(event:Event,cards:LearningCard[]){
    cards.length <= this.elementToShow$.value&&this.elementToShow$.next(0);
    let value: number = this.elementToShow$.value;
    this.elementToShow$.next(++value)
  }
  beforeElementOnClick(event:Event,cards:LearningCard[]){
    cards.length <= this.elementToShow$.value&&this.elementToShow$.next(0);
    let value: number = this.elementToShow$.value;
    this.elementToShow$.next(--value)
  }

  /**
   * @param select lvl for filtering cards
   */

  filterByCorrectAnswerCount(select:number){
    this.learningCards$=this.getAllCards()
    if(select===1){
      return this.learningCards$.pipe(
        map(cards=>cards["cards"]
          .filter((card:LearningCard)=>card.correctAnswerCount<=3)));
    }
    if(select===2){
      return this.learningCards$.pipe(
        map(cards=>cards["cards"]
        .filter((card:LearningCard)=>card.correctAnswerCount>3&&card.correctAnswerCount<=6)));
    }
    if(select===3){
      return this.learningCards$.pipe(
        map(cards=>cards["cards"]
        .filter((card:LearningCard)=>card.correctAnswerCount>6&&card.correctAnswerCount<=9)));
    }
    if(select===4){
      return this.learningCards$.pipe(
        map(cards=>cards["cards"]
        .filter((card:LearningCard)=>card.correctAnswerCount>9&&card.correctAnswerCount<=12)));
    }
    if(select===5){
        return this.learningCards$.pipe(
          map(cards=>cards["cards"]
            .filter((card:LearningCard)=>card.correctAnswerCount>12)));
    }
  }
  ngOnDestroy() {
    this.destroyBigMac$.next()
  }

}
