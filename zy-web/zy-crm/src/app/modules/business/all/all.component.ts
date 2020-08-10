import { Component, OnInit, ViewChild } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd/message';

import { ToolService } from '../../../services/tool.service'
import { HttpService } from '../../../services/http.service'

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  data: any = { }

  condition: any = {
    customerName: '',
    name: '',
    phone: ''
  }

  old_condition: any = { ...this.condition }

  @ViewChild('edit')
  edit: any

  constructor(public tool: ToolService, private http: HttpService, private message: NzMessageService) { }

  ngOnInit(): void {
    this.get_data(1)
  }

  get_data(pageNum: number) {
    console.log("get_data")
    this.http.doGet(`/customer-contacts/list/${pageNum}/10?customerName=${this.old_condition.customerName}&name=${this.old_condition.name}&phone=${this.old_condition.phone}`).subscribe((response: any) => {
      if(response.code == 0){
        this.data = response.data
        this.tool.initCheckArr(this.data.list.length)
      }else{
        console.log(response)
      }
    }, (error: any) => {
      console.log(error)
    })
  }

  onSearch() {
    if (this.condition.name != this.old_condition.name
      || this.condition.customerName != this.old_condition.customerName
      || this.condition.phone != this.old_condition.phone) {

      this.old_condition = { ...this.condition }
      this.get_data(1)
    }
  }

  pageIndexChange(event) {
    this.get_data(event)
  }

  delete_arr() {
    const indexs = this.tool.getAllCheckIndex()
    if(indexs.length == 0){
      this.message.create('error', `请选择要删除的数据`);
      return
    }

    const ids = indexs.map(e => this.data.list[e].id)

    this.http.doFormPost(`/customer-contacts/deleteArr`, {id: ids}).subscribe((response: any) => {
      if(response.code == 0){
        this.message.create('success', `删除成功`);
        const pageNum = this.data.pageNum == 1 ? 1 : (this.data.list.length == ids.length ? this.data.pageNum - 1 : this.data.pageNum)
        this.get_data(pageNum)
      }else{
        console.log(response)
      }
    }, (error: any) => {
      console.log(error)
    })
  }

  delete(id) {
    this.http.doDelete(`/customer-contacts/delete/${id}`).subscribe((response: any) => {
      if(response.code == 0){
        this.message.create('success', `删除成功`);
        const pageNum = this.data.pageNum == 1 ? 1 : (this.data.list.length == 1 ? this.data.pageNum - 1 : this.data.pageNum)
        this.get_data(pageNum)
      }else{
        console.log(response)
      }
    }, (error: any) => {
      console.log(error)
    })
  }

}
