import { Component } from '@angular/core';
import { PlatformLocation } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  menuArr:Array<any> = [
    {
      title: '凭证',
      isOpen: false,
      icon: 'user',
      link: '/voucher',
      children: [
        {
          title: '凭证列表',
          link: '/list'
        },
        {
          title: '凭证录入',
          link: '/add'
        },
        {
          title: '凭证汇总表',
          link: '/sale-clues'
        },
        {
          title: '原始凭证',
          link: '/public-clues'
        },
        {
          title: '业务凭证',
          link: '/contacts'
        }
      ]
    }
  ]

  constructor(private location: PlatformLocation){
    let pathname = '/' + this.location.pathname.split('/')[1]
    this.menuArr.map(e => {
      if(e.link == pathname){
        e.isOpen=true
        return
      }
    })
  }

  public menuClick(i){
    this.menuArr.map(function(item, index){
        if(index != i){
          item.isOpen = false
        }
    })
  }
}
