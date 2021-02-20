import {Component, Input, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {LearningCard} from '../../models/card-box/LearningCard';
import {SelectTopicService} from '../../topics/services/select-topic.service';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Chapter} from '../../models/topic/Chapter';
import {map, switchMap} from 'rxjs/operators';
import {Topic} from '../../models/topic/TopicTemplate';

@Component({
  selector: 'app-learning-card',
  templateUrl: './learning-card.component.html',
  styleUrls: ['./learning-card.component.css']
})
export class LearningCardComponent implements OnInit,OnDestroy {

  @Input()cardItemId:number;
  @Input()card: LearningCard;
  @Output()selectedIdOutput= new EventEmitter<number>();

  selectedId:number=0;
  showAnswer: boolean=false;
  subscription:Subscription

  constructor(private httpService:SelectTopicService,private router:Router) { }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription&&this.subscription.unsubscribe()
  }
  onSuccess(event:Event) {

    ++this.card.correctAnswerCount;
   //this.httpService.editCard(this.card.key).subscribe(data=> console.log(data),error => console.log("data"))
  }
  onFail(event:Event){
    --this.card.correctAnswerCount;
    this.subscription=this.httpService.editCard(this.card.key,this.card).subscribe(res=>{
      this.subscription.unsubscribe()
    });
  }
}
