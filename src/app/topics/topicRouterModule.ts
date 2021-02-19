import {RouterModule, Routes} from '@angular/router';
import {SelectTopicComponent} from './select-topic/select-topic.component';
import {ReviewComponent} from './review/review.component';
import {LearnmodeComponent} from './learnmode/learnmode.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';

const routes:Routes=[
  {
    path:'',
    redirectTo: 'review',
    pathMatch:'full'
  },
  {
    path: 'review',
    component: ReviewComponent
  },
  {
    path:':topic',
    component:SelectTopicComponent,
  },
  {
    path:':topic/learnmode',
    component: LearnmodeComponent,
    children:[
      {
        path:'learning-cards',
        loadChildren: ()=> import('src/app/cardbox/card-box.module').then(m=>m.CardBoxModule),
      }
    ]
  },
  {
    path:'**',
    component:PageNotFoundComponent
  },
]

export const topicRoutes= RouterModule.forChild(routes)
