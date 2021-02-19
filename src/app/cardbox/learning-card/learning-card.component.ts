import {Component, Input, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {LearningCard} from '../../models/card-box/LearningCard';
import {SelectTopicService} from '../../topics/services/select-topic.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

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
   this.subscription= this.httpService.editCard(this.card.key,this.card).subscribe(res=>{
     this.subscription.unsubscribe()
    })
  }
  onFail(event:Event){
    --this.card.correctAnswerCount;
    this.subscription=this.httpService.editCard(this.card.key,this.card).subscribe(res=>{
      this.subscription.unsubscribe()
    });
  }
}
