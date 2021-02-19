import {RouterModule, Routes} from '@angular/router';
import {CardListComponent} from './card-list/card-list.component';




const routes:Routes=[

  {
    path:'',
    redirectTo:'card-list',
    pathMatch:'full'
  },
  {
    path:'card-list',
    component: CardListComponent,
  },
]
export const cardRouterModule = RouterModule.forChild(routes);
