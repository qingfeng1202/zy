import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

import { HttpService } from '../../../services/http.service'

@Component({
  selector: 'app-contacts-edit',
  templateUrl: './contacts-edit.component.html',
  styleUrls: ['./contacts-edit.component.scss']
})
export class ContactsEditComponent implements OnInit {

  modal: any
  data: any
  error: any

  constructor(private message: NzMessageService, private http: HttpService) { }

  ngOnInit(): void {
    this.modal = {
      title: '',
      isVisible: false,
      isOkLoading: false
    }
  
    this.data = {}
  
    this.error = {
      name: { },
      phone: { }
    }
  }
  
  open(title: string, status: string, id?){
    if(id && status == 'update'){
      this.http.doGet(`/customer-contacts/get/${id}`).subscribe((response: any) => {
        if(response.code == 0){
          this.data = response.data
        }else{
          console.log(response)
        }
      }, (error: any) => {
        console.log(error)
      })
    }

    this.modal.title = title
    this.modal.status = status
    this.modal.isVisible = true
  }

  handleCancel(){
    this.modal.isVisible = false
  }

  handleOk(){
    this.check_name()
    this.check_phone()

    if(this.error.name.isError || this.error.phone.isError){
      this.message.create('error', `联系人姓名或联系人电话不正确`);
      return
    }

    this.modal.isOkLoading = true

    if(this.modal.status == 'add'){
      this.add()
    }else if(this.modal.status == 'update' && this.data.id){
      this.update()
    }else{
      this.modal.isOkLoading = false
      this.message.create('error', `出错`);
    }
  }

  // Modal 完全关闭后的回调，清理数据
  afterClose(){
    this.ngOnInit()
  }

  add(){
    this.http.doJSONPost(`/customer-contacts/insert`, this.data).subscribe((response: any) => {
      if(response.code == 0){
        this.message.create('success', `添加联系人成功`);
        this.handleCancel()
      }else{
        console.log(response)
      }
    }, (error: any) => {
      console.log(error)
    })
  }

  update(){
    this.http.doJSONPost(`/customer-contacts/update`, this.data).subscribe((response: any) => {
      if(response.code == 0){
        this.message.create('success', `修改联系人成功`);
        this.handleCancel()
      }else{
        console.log(response)
      }
    }, (error: any) => {
      console.log(error)
    })
  }


  check_name(){
    if(!this.data.name || '' == this.data.name){
      this.error.name.isError = true
      this.error.name.errMsg = '联系人姓名不能为空'
    }else{
      this.error.name.isError = false
    }
  }

  check_phone(){
    if(!this.data.phone || '' == this.data.phone){
      this.error.phone.isError = true
      this.error.phone.errMsg = '联系人电话不能为空'
    }else if(! this.isPhone(this.data.phone)){
      this.error.phone.isError = true
      this.error.phone.errMsg = '手机号不正确'
    }else{
      this.error.phone.isError = false
    }
  }


   // 检查字符串是否为合法Email地址
   isEmail(str: string) {
    let reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if (reg.test(str)) {
      console.log('Email格式输入正确');
      return true;
    } else {
      console.log('请输入正确格式的Email');
      return false;
    }
  }

  // 检查字符串是否为合法手机号码
  isPhone(str: string) {
    let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/;
    if (reg.test(str)) {
      console.log('手机号码格式输入正确');
      return true;
    } else {
      console.log('请输入正确格式的手机号码');
      return false;
    }
  }
}
