import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../../services/http.service'

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  modal = {
    title: '',
    isVisible: false,
    isOkLoading: false
  }

  data: any = {}

  contacts = [
    {
      id: 1,
      name: 'aa'
    },
    {
      id: 2,
      name: 'aa'
    }
  ]

  // 客户级别
  customer_level = []
  // 客户来源
  customer_source = []

  constructor(private http: HttpService) { 
    http.doGet(`/customer-source/list`).subscribe((response: any) => {
      console.log(response)

      if(response.code == 0){
        this.customer_source = response.data
        if(response.data.length > 0){
          this.data.customerSourceId = response.data[0].id
        }
      }
    }, (error: any) => {
      console.log(error)
    })
  }

  ngOnInit(): void {
  }
  
  open(title: string, id?){
    if(id){
      
    }

    if(this.customer_level.length > 0){
      this.data.customerLevelId = this.customer_level[0].id
    }

    this.modal.title = title
    this.modal.isVisible = true
  }

  handleCancel(){
    this.modal.isVisible = false
  }

  handleOk(){
    
    // this.modal.callbackFunction()
  }

  
  afterClose(){
    console.log("afterClose")
  }

  add(){
    console.log("add")
  }

  update(){
    console.log("update")
  }

  delete_contacts(id){
    console.log("delete_contacts", id)
  }


}
