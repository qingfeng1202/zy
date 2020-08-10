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
      title: '客户',
      isOpen: false,
      icon: 'user',
      link: '/customer',
      children: [
        {
          title: '客户列表',
          link: '/list'
        },
        {
          title: '公海客户',
          link: '/public-customers'
        },
        {
          title: '销售线索',
          link: '/sale-clues'
        },
        {
          title: '公共线索',
          link: '/public-clues'
        },
        {
          title: '联系人列表',
          link: '/contacts'
        }
      ]
    },
    {
      title: '商机',
      isOpen: false,
      icon: 'account-book',
      link: '/business',
      children: [
        {
          title: '全部商机',
          link: '/all'
        },
        {
          title: '我的商机',
          link: '/my'
        },
        {
          title: '下属商机',
          link: '/subordinate'
        }
      ]
    },
    {
      title: '财务',
      isOpen: false,
      icon: 'profile',
      link: '/finance',
      children: [
        {
          title: '全部合同',
          link: '/all'
        },
        {
          title: '我的合同',
          link: '/my'
        },
        {
          title: '下属合同',
          link: '/subordinate'
        }
      ]
    },
    {
      title: '日常',
      isOpen: false,
      icon: 'schedule',
      link: '/daily',
      children: [
        {
          title: '日程',
          link: '/schedule'
        },
        {
          title: '任务',
          link: '/task'
        },
        {
          title: '跟进',
          link: '/follow-up'
        }
      ]
    },
    {
      title: '数据',
      isOpen: false,
      icon: 'table',
      link: '/data',
      children: [
        {
          title: '销售排行',
          link: '/sales-ranking'
        },
        {
          title: '新增客户排行',
          link: '/new-customer-ranking'
        },
        {
          title: '销售漏斗',
          link: '/sales-funnel'
        }
      ]
    },
    {
      title: '设置',
      isOpen: false,
      icon: 'setting',
      link: '/setting',
      children: [
        {
          title: '个人设置',
          link: '/personal'
        },
        {
          title: '员工与部门',
          link: '/user'
        },
        {
          title: '权限设置',
          link: '/role'
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
