import {Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {SelectTopicService} from '../services/select-topic.service';
import {Topic} from '../../models/topic/TopicTemplate';
import {ActivatedRoute, Router} from '@angular/router';
import {Chapter} from '../../models/topic/Chapter';

@Component({
  selector: 'app-select-topic',
  templateUrl: './select-topic.component.html',
  styleUrls: ['./select-topic.component.css']
})
export class SelectTopicComponent implements OnInit,OnDestroy {

  $topicSub: Subscription;

  topicKey:string;
  chapters:Chapter[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private selectTopicService:SelectTopicService) { }

  ngOnInit(): void {
    this.$topicSub= this.activatedRoute.params.subscribe(topic => {
      this.topicKey= topic['topic'];
      this.selectTopicService.getTopicFromHttp(this.topicKey).subscribe(topic=>{
        this.chapters=topic["chapters"];
      })
    });
  }
  ngOnDestroy():void{
    this.$topicSub&&this.$topicSub.unsubscribe();
  }

}
