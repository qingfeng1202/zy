import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesRankingComponent } from './sales-ranking/sales-ranking.component';
import { NewCustomerRankingComponent } from './new-customer-ranking/new-customer-ranking.component';
import { SalesFunnelComponent } from './sales-funnel/sales-funnel.component';


const routes: Routes = [
  {
    path: 'sales-ranking', // 销售排行
    component: SalesRankingComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'sales-ranking' },
  {
    path: 'new-customer-ranking', // 新增客户排行
    component: NewCustomerRankingComponent 
  },
  {
    path: 'sales-funnel',  // 销售漏斗
    component: SalesFunnelComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule { }
