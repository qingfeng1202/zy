import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  constructor() { }

  allChecked = false
  checkArr: Array<boolean> = []

    /**
   * 初始化checkArr数组
   */
  initCheckArr(len:number){
    this.allChecked = false
    this.checkArr = []
    for(let i=0; i<len; i++){
      this.checkArr.push(false)
    }
  }

  /**
   * 全选或全不选
   * @param event 
   */
  onAllChecked(event): void {
    for (let i = 0, len = this.checkArr.length; i < len; i++) {
      this.checkArr[i] = event
    }
  }

  /**
   * 单个选择框选择
   * @param event 
   */
  onChecked(event): void {
    if (!event) {
      this.allChecked = false
    } else {
      for (let i = 0, len = this.checkArr.length; i < len; i++) {
        if (!this.checkArr[i]) {
          return
        }
      }
      this.allChecked = true
    }
  }

  /**
   * 获取所有选中的下标
   */
  getAllCheckIndex(): Array<number>{
    const indexs: Array<number> = []

    for(let i=0,len=this.checkArr.length; i<len; i++){
      if(this.checkArr[i]){
        indexs.push(i)
      }
    }

    return indexs
  }

}
