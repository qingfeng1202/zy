import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { SalesRankingComponent } from './sales-ranking/sales-ranking.component';
import { NewCustomerRankingComponent } from './new-customer-ranking/new-customer-ranking.component';
import { SalesFunnelComponent } from './sales-funnel/sales-funnel.component';


@NgModule({
  declarations: [SalesRankingComponent, NewCustomerRankingComponent, SalesFunnelComponent],
  imports: [
    CommonModule,
    DataRoutingModule
  ]
})
export class DataModule { }
