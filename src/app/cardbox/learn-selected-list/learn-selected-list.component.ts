import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {LearningCard} from '../../models/card-box/LearningCard';

@Component({
  selector: 'app-learn-selected-list',
  templateUrl: './learn-selected-list.component.html',
  styleUrls: ['./learn-selected-list.component.css']
})
export class LearnSelectedListComponent implements OnInit,DoCheck {

  @Input()cards:LearningCard[]=[];
  @Input()selectedId:number;


  constructor() { }

  ngOnInit(): void {

  }

  ngDoCheck(): void {

    if(this.cards!==undefined&&this.selectedId===undefined)
    {
      this.selectedId=0
    }

  }

}
