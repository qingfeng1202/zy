import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCluesComponent } from './public-clues.component';

describe('PublicCluesComponent', () => {
  let component: PublicCluesComponent;
  let fixture: ComponentFixture<PublicCluesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicCluesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicCluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
