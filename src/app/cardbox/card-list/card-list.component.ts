import {Component, OnInit,} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

import {SelectTopicService} from '../../topics/services/select-topic.service';
import {LearningCard} from '../../models/card-box/LearningCard';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {


  topicKey$:Observable<string>;
  learningCards$:Observable<any>;
  elementToShow$:BehaviorSubject<number>= new BehaviorSubject<number>(0);
  activeCard$:Observable<any>;

  selectInfo:boolean=false;
  isActivate:boolean=false
  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private topicService:SelectTopicService) { }


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
   */

  setLvl(selected: number) {
    this.learningCards$= this.filterByCorrectAnswerCount(selected);

  }

  /**
   * combineLatest from Rxjs: Pass arguments in a single array instead combineLatest([a, b, c]) and returns an Observable
   */
    next(card:LearningCard){

    this.activeCard$= combineLatest([this.learningCards$,this.elementToShow$]).pipe(
      map(([allCards,behaviorSubject])=> {
        allCards[++behaviorSubject];
      })
    )
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


}
