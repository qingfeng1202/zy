import { Component, OnInit, ViewChild } from '@angular/core';

import { ToolService } from '../../../services/tool.service'
import { HttpService } from '../../../services/http.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

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
    customerLevel: '',
    createTimeRange: '',
    updateTimeRange: ''
  }

  old_condition: any = { ...this.condition }

  // 客户级别
  customer_level = []

  @ViewChild('edit')
  edit: any

  @ViewChild('detailed')
  detailed: any


  constructor(public tool: ToolService, private http: HttpService) { 
    http.doGet(`/customer-level/list`).subscribe((response: any) => {
      console.log(response)

      if(response.code == 0){
        this.customer_level = response.data
        this.edit.customer_level = response.data
      }
    }, (error: any) => {
      console.log(error)
    })
  }

  ngOnInit(): void {
    this.tool.initCheckArr(this.data.list.length)
  }

  get_data() {
    console.log("get_data")
    console.log(this.old_condition)
  }

  onSearch() {
    console.log("onSearch")

    if (this.condition.name != this.old_condition.name
      || this.condition.chargeUser != this.old_condition.chargeUser
      || this.condition.customerLevel != this.old_condition.customerLevel
      || this.condition.createTimeRange != this.old_condition.createTimeRange
      || this.condition.updateTimeRange != this.old_condition.updateTimeRange) {

      this.old_condition = { ...this.condition }
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




  // http://demo.axureshop.com/?url=http://cloud.axureshop.com/rm00ob&buyurl=https://www.axureshop.com/a/1458403.html





}
