import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 引入表单相关的模块，才可以使用双向数据绑定
import { FormsModule } from '@angular/forms'

import { VoucherRoutingModule } from './voucher-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

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
  declarations: [AddComponent, ListComponent],
  imports: [
    CommonModule,
    FormsModule,
    VoucherRoutingModule,
    CommonModule,
    FormsModule,
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
    NzAlertModule,
    NzMessageModule
  ]
})
export class VoucherModule { }
