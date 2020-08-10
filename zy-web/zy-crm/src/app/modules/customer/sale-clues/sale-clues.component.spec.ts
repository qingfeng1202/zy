import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleCluesComponent } from './sale-clues.component';

describe('SaleCluesComponent', () => {
  let component: SaleCluesComponent;
  let fixture: ComponentFixture<SaleCluesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleCluesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleCluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
