import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {SelectTopicService} from '../../topics/services/select-topic.service';
import {LearningCard} from '../../models/card-box/LearningCard';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  index:number
  topicKey:string;
  $subscription:Subscription
  selectInfo:boolean=false
  learningCards:LearningCard[]=[];
  selectedList:LearningCard[];

  @Output()learningSelectedList= new EventEmitter<LearningCard[]>();

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private topicService:SelectTopicService) { }

  ngOnInit(): void {
    this.$subscription = this.activatedRoute.queryParams.subscribe(key => {
      this.topicKey = key["topicKey"];
      this.topicService.getAllCardsFromHttp(this.topicKey).subscribe(cards=>{
       this.learningCards=cards["cards"]
      });
    });
  }
  setLvl(select: number) {
    this.selectedList= this.filterByCorrectAnswerCount(select)
  }
  filterByCorrectAnswerCount(select:number){
    const selectedList:LearningCard[]=[];
    select===1&&this.learningCards?.filter(card=>card.correctAnswerCount<=3&&selectedList.push(card));
    select===2&&this.learningCards?.filter(card=>card.correctAnswerCount>3&&card.correctAnswerCount<=6&&selectedList.push(card));
    select===3&&this.learningCards?.filter(card=>card.correctAnswerCount>6&&card.correctAnswerCount<=9&&selectedList.push(card));
    select===4&&this.learningCards?.filter(card=>card.correctAnswerCount>9&&card.correctAnswerCount<=12&&selectedList.push(card));
    select===5&&this.learningCards?.filter(card=>card.correctAnswerCount>12&&selectedList.push(card));
    alert("g")
    return selectedList

  }
}
