import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import {cardRouterModule} from './cardRouterModule';
import { LearningCardComponent } from './learning-card/learning-card.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AddCardComponent} from './add-card/add-card.component';





@NgModule({
  declarations: [CardListComponent, LearningCardComponent,AddCardComponent],
  imports: [
    CommonModule,
    cardRouterModule,
    ReactiveFormsModule

  ]
})
export class CardBoxModule { }
