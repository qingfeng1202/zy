import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomerRankingComponent } from './new-customer-ranking.component';

describe('NewCustomerRankingComponent', () => {
  let component: NewCustomerRankingComponent;
  let fixture: ComponentFixture<NewCustomerRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCustomerRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCustomerRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
