import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCustomersComponent } from './public-customers.component';

describe('PublicCustomersComponent', () => {
  let component: PublicCustomersComponent;
  let fixture: ComponentFixture<PublicCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
