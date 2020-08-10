import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyRoutingModule } from './daily-routing.module';
import { ScheduleComponent } from './schedule/schedule.component';
import { TaskComponent } from './task/task.component';
import { FollowUpComponent } from './follow-up/follow-up.component';


@NgModule({
  declarations: [ScheduleComponent, TaskComponent, FollowUpComponent],
  imports: [
    CommonModule,
    DailyRoutingModule
  ]
})
export class DailyModule { }
