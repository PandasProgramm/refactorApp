import { Injectable } from '@angular/core';
import {LearningCard} from '../../models/card-box/LearningCard';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards:LearningCard[];
  constructor() {
  }
  setCards(cards:LearningCard[]){
    this.cards=cards;
  }
  getCards(){
    return this.cards;
  }
}
