import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LearningCard} from '../../models/card-box/LearningCard';
import {SelectTopicService} from '../../topics/services/select-topic.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit, OnDestroy {

  constructor(private httpService:SelectTopicService) {
  }
  @Output()isActive= new EventEmitter<boolean>();
  subscription:Subscription;

  addCardForm= new FormGroup({
    key: new FormControl(null,[Validators.required]),
    question: new FormControl(null,[Validators.required,Validators.minLength(10)]),
    answer: new FormControl(null,[Validators.required,Validators.minLength(10)]),
    checkbox:new FormControl(null),
  })

  ngOnInit(): void {
  }
  onSave(){
    //TODO:http
    const card:LearningCard= this.addCardForm.value
    alert(card.id+" "+card.question)
    this.isActive.emit(false);
  }

  ngOnDestroy(): void {
    this.subscription&&this.subscription.unsubscribe();
  }

}
