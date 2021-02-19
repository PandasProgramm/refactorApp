import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {Chapter} from '../../models/topic/Chapter';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @Input()chapters:Chapter[]=[]
  CURRENT_URL;

  constructor(private router:Router) { }

  ngOnInit(): void {
      this.CURRENT_URL=this.router.url
  }
  onNavigate(chapterId:string){
    this.router.navigate([`${this.CURRENT_URL}//learnmode`],{queryParams:{'topicKey':chapterId}})
  }

}
