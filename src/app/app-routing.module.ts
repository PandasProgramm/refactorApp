import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReviewComponent} from './topics/review/review.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path: '',
    redirectTo:'topics',
    pathMatch:'full'
  },
  {
    path:'review',
    component:ReviewComponent
  },
  {
    path:'topics',
    loadChildren: ()=>import('./topics/topics.module').then(module => module.TopicsModule),
  },
  {
    path:'**',
    component:PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
