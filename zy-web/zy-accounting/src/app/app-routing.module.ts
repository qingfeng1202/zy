import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'home', // 路由路径
    component: HomeComponent  // 挂载的组件
  },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'voucher', loadChildren: () => import('./modules/voucher/voucher.module').then(m => m.VoucherModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
