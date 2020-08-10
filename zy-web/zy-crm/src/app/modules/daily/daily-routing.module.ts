import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleComponent } from './schedule/schedule.component';
import { TaskComponent } from './task/task.component';
import { FollowUpComponent } from './follow-up/follow-up.component';

const routes: Routes = [
  {
    path: 'schedule', // 日程
    component: ScheduleComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'schedule' },
  {
    path: 'task', // 任务
    component: TaskComponent 
  },
  {
    path: 'follow-up',  // 跟进
    component: FollowUpComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyRoutingModule { }
