import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home', // 路由路径
    component: HomeComponent  // 挂载的组件
  },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'customer', loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule) },
  { path: 'business', loadChildren: () => import('./modules/business/business.module').then(m => m.BusinessModule) },
  { path: 'finance', loadChildren: () => import('./modules/finance/finance.module').then(m => m.FinanceModule) },
  { path: 'daily', loadChildren: () => import('./modules/daily/daily.module').then(m => m.DailyModule) },
  { path: 'data', loadChildren: () => import('./modules/data/data.module').then(m => m.DataModule) },
  { path: 'setting', loadChildren: () => import('./modules/setting/setting.module').then(m => m.SettingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
