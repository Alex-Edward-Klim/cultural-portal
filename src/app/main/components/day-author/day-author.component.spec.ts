import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayAuthorComponent } from './day-author.component';

describe('DayAuthorComponent', () => {
  let component: DayAuthorComponent;
  let fixture: ComponentFixture<DayAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
