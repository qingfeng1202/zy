import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-detailed',
  templateUrl: './customer-detailed.component.html',
  styleUrls: ['./customer-detailed.component.scss']
})
export class CustomerDetailedComponent implements OnInit {

  visible = false;

  constructor() { }

  ngOnInit(): void {
  }

  title

  open(name, id): void {
    this.title = name
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
