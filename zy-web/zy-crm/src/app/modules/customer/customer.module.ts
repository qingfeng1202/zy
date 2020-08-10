import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 引入表单相关的模块，才可以使用双向数据绑定
import { FormsModule } from '@angular/forms'

import { CustomerRoutingModule } from './customer-routing.module';
import { ListComponent } from './list/list.component';
import { PublicCustomersComponent } from './public-customers/public-customers.component';
import { SaleCluesComponent } from './sale-clues/sale-clues.component';
import { PublicCluesComponent } from './public-clues/public-clues.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { ContactsEditComponent } from './contacts-edit/contacts-edit.component';
import { CustomerDetailedComponent } from './customer-detailed/customer-detailed.component';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageModule } from 'ng-zorro-antd/message';



@NgModule({
  declarations: [ListComponent, PublicCustomersComponent, SaleCluesComponent, PublicCluesComponent, ContactsComponent, CustomerEditComponent, ContactsEditComponent, CustomerDetailedComponent],
  imports: [
    CommonModule,
    FormsModule,
    CustomerRoutingModule,
    NzBreadCrumbModule,
    NzTableModule,
    NzSpaceModule,
    NzGridModule,
    NzInputModule,
    NzPaginationModule,
    NzModalModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzIconModule,
    NzSelectModule,
    NzDatePickerModule,
    NzDrawerModule,
    NzTabsModule,
    NzBadgeModule,
    NzAlertModule,
    NzMessageModule,
  ]
})
export class CustomerModule { }
