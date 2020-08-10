import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesRankingComponent } from './sales-ranking.component';

describe('SalesRankingComponent', () => {
  let component: SalesRankingComponent;
  let fixture: ComponentFixture<SalesRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
