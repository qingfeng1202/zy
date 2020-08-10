import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalComponent } from './personal/personal.component';


const routes: Routes = [
  {
    path: 'personal', // 个人设置
    component: PersonalComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'personal' },
  // {
  //   path: 'task', // 员工与部门
  //   component: TaskComponent 
  // },
  // {
  //   path: 'follow-up',  // 权限设置
  //   component: FollowUpComponent 
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
