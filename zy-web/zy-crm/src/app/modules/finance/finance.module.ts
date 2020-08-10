import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { AllComponent } from './all/all.component';
import { MyComponent } from './my/my.component';
import { SubordinateComponent } from './subordinate/subordinate.component';


@NgModule({
  declarations: [AllComponent, MyComponent, SubordinateComponent],
  imports: [
    CommonModule,
    FinanceRoutingModule
  ]
})
export class FinanceModule { }
