import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {topicRoutes} from './topicRouterModule';
import {SelectTopicComponent} from './select-topic/select-topic.component';
import { TopicComponent } from './topic/topic.component';
import { LearnmodeComponent } from './learnmode/learnmode.component';




@NgModule({
  declarations: [ SelectTopicComponent, TopicComponent, LearnmodeComponent],
  imports: [
    CommonModule,
    topicRoutes,
  ]
})
export class TopicsModule { }
