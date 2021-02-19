import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import {cardRouterModule} from './cardRouterModule';
import { LearningCardComponent } from './learning-card/learning-card.component';
import { LearnSelectedListComponent } from './learn-selected-list/learn-selected-list.component';




@NgModule({
  declarations: [CardListComponent, LearningCardComponent, LearnSelectedListComponent],
  imports: [
    CommonModule,
    cardRouterModule

  ]
})
export class CardBoxModule { }
