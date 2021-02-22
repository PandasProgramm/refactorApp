import {Component, OnInit, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LearningCard} from '../../models/card-box/LearningCard';
import {HttpApiService} from '../../topics/services/http-api.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit, OnDestroy {

  constructor(private httpService: HttpApiService) {
  }

  @Output()isActive= new EventEmitter<boolean>();
  subscription:Subscription;

  addCardForm= new FormGroup({
    key: new FormControl(null,[Validators.required]),
    question: new FormControl(null,[Validators.required,Validators.minLength(10)]),
    answer: new FormControl(null,[Validators.required,Validators.minLength(10)]),
    checkbox:new FormControl(false),
  })

  ngOnInit(): void {
  }
  onSave(event){
    //TODO:http
    let card:LearningCard= this.addCardForm.value
    if(event){
      card.userId="all"
    }
    else{

    }
    alert(card.userId+" "+card.question)
    this.isActive.emit(false);
  }

  ngOnDestroy(): void {
    this.subscription&&this.subscription.unsubscribe();
  }

}
