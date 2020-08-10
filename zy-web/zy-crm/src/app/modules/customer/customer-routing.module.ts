import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { PublicCustomersComponent } from './public-customers/public-customers.component';
import { SaleCluesComponent } from './sale-clues/sale-clues.component';
import { PublicCluesComponent } from './public-clues/public-clues.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {
    path: 'list', // 客户列表
    component: ListComponent
  },
  { path: '', pathMatch: 'full', redirectTo: '/list' },
  {
    path: 'public-customers', // 公海客户
    component: PublicCustomersComponent 
  },
  {
    path: 'sale-clues',  // 销售线索
    component: SaleCluesComponent 
  },
  {
    path: 'public-clues', // 公共线索
    component: PublicCluesComponent 
  },
  {
    path: 'contacts', // 联系人列表
    component: ContactsComponent  
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
