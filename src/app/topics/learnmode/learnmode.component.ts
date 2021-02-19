import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-learnmode',
  templateUrl: './learnmode.component.html',
  styleUrls: ['./learnmode.component.css']
})
export class LearnmodeComponent implements OnInit, OnDestroy {

  $getTopicKeySub:Subscription
  headline:string
  public topicKey:string;

  constructor(private router:Router,private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.headline=this.router.url.split("/")[2].replace("%2520"," ");
    this.$getTopicKeySub= this.activatedRoute.queryParams.subscribe(key=>{
      this.topicKey=key['topicKey'];
    })
  }
  ngOnDestroy(): void {
    this.$getTopicKeySub&&this.$getTopicKeySub.unsubscribe();
  }

}
