import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllComponent } from './all/all.component';
import { MyComponent } from './my/my.component';
import { SubordinateComponent } from './subordinate/subordinate.component';


const routes: Routes = [
  {
    path: 'all', // 全部合同
    component: AllComponent
  },
  { path: '', pathMatch: 'full', redirectTo: '/list' },
  {
    path: 'my', // 我的合同
    component: MyComponent 
  },
  {
    path: 'subordinate',  // 下属合同
    component: SubordinateComponent 
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
