import { Component, OnInit } from '@angular/core';

import { ToolService } from '../../../services/tool.service'

@Component({
  selector: 'app-public-customers',
  templateUrl: './public-customers.component.html',
  styleUrls: ['./public-customers.component.scss']
})
export class PublicCustomersComponent implements OnInit {

  data: any = {
    list: [{
      id: 1,
      chargeUserName: '客户负责人',
      name: '客户名称',
      phone: '电话',
      fax: '传真',
      website: '网址',
      address: '地址',
      customer: '客户来源',
      remark: '备注',
      img: '图片',
      enclosure: '附件',
      createTime: '创建时间',
      updateTime: '更新时间',
    }],
    pageNum: 2,
    total: 10
  }

  condition: any = {
    name: '',
    chargeUser: '',
    status: '',
    createTimeRange: '',
    updateTimeRange: ''
  }

  old_condition: any = { ...this.condition }

  constructor(public tool: ToolService) { }

  ngOnInit(): void {
    this.tool.initCheckArr(this.data.list.length)
  }

  get_data() {
    console.log("get_data")
  }

  onSearch() {
    if (this.condition.name != this.old_condition.name
      || this.condition.chargeUser != this.old_condition.chargeUser
      || this.condition.status != this.old_condition.status
      || this.condition.createTimeRange != this.old_condition.createTimeRange
      || this.condition.updateTimeRange != this.old_condition.updateTimeRange) {

      this.old_condition = { ...this.condition }
      console.log("onSearch")
      this.get_data()
    }
  }

  pageIndexChange(event) {
    this.get_data()
  }


  delete_arr() {
    console.log("delete_arr")
  }

  delete(id) {
    console.log("delete", id)
  }


}
