import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {Protection_Guard} from './guards/protection';


const routes :Routes=[

  {
    path:'',
    redirectTo: 'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent,

  },
  {
    path:'register',
    component:RegistrationComponent
  },
  {
    path:':topics',
    loadChildren: ()=>import('../topics/topics.module').then(module => module.TopicsModule),
    canActivate:[Protection_Guard]
  },
  {
    path:'**',
    component:PageNotFoundComponent
  },
]
export const authenticate= RouterModule.forChild(routes)
