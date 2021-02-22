import {Component,OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpApiService} from '../services/http-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Chapter} from '../../models/topic/Chapter';
import {map,switchMap, takeUntil} from 'rxjs/operators';


@Component({
  selector: 'app-select-topic',
  templateUrl: './select-topic.component.html',
  styleUrls: ['./select-topic.component.css']
})
export class SelectTopicComponent implements OnInit,OnDestroy {



  destroySub$= new Subject()
  topicObs$:Observable<string>;
  chaptersObs$: Observable<Chapter[]>;

  chapters:Chapter[];


  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private httpApiService:HttpApiService) { }

  ngOnInit(): void {
    this.topicObs$ = this.activatedRoute.params.pipe(
      map(topic=> topic.topic),(takeUntil(this.destroySub$)));

    this.chaptersObs$= this.topicObs$.pipe(
        switchMap(topic=> this.httpApiService.getTopicFromHttp(topic))).pipe(
          map(topic=>topic["chapters"]),
            takeUntil(this.destroySub$))
    /**
      this is a Antipattern :
      this.$topicSub= this.activatedRoute.params.pipe(takeUntil(this.destroySub$)).subscribe(topic => {
      this.topicKey= topic['topic'];
      this.httpApiService.getTopicFromHttp(this.topicKey).subscribe(topic=>{
        this.chapters=topic["chapters"];
      })
    });
     Do never use nested subscription: need to switchmap/map/mergemap or other operations for observables: ALWAYS USE THIS PATTERN!

     switchmap:Projects each source value to an Observable which is merged in the output Observable,
               emitting values only from the most recently projected Observable(docs/ page 807)
               takeUntil => map function no automatically stop mirroring
     mergeMap: Projects each source value to an Observable which is merged in the output Observable(docs/page 806)
     */

  }
  ngOnDestroy():void{
   /** this.$topicSub&&this.$topicSub.unsubscribe();
    *  this is better like this.$topicSub.unsubscripe() but:
    *
    *  takeUntil subscribes and begins mirroring the source Observable. It also monitors a second Observable, notifier that you provide.
    *  If the notifier emits a value, the output Observable stops mirroring the source Observable and completes.
    *  If the notifier doesn't emit any value and completes then takeUntil will pass all values.
    */
   this.destroySub$.next()
  }

}
