import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllComponent } from './all/all.component';
import { MyComponent } from './my/my.component';
import { SubordinateComponent } from './subordinate/subordinate.component';

const routes: Routes = [
  {
    path: 'all', // 全部商机
    component: AllComponent
  },
  { path: '', pathMatch: 'full', redirectTo: '/list' },
  {
    path: 'my', // 我的商机
    component: MyComponent 
  },
  {
    path: 'subordinate',  // 下属商机
    component: SubordinateComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
