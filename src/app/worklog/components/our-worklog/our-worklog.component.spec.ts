import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorklogComponent } from './our-worklog.component';

describe('OurWorklogComponent', () => {
  let component: OurWorklogComponent;
  let fixture: ComponentFixture<OurWorklogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurWorklogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurWorklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
