import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStyleguideComponent } from './our-styleguide.component';

describe('OurStyleguideComponent', () => {
  let component: OurStyleguideComponent;
  let fixture: ComponentFixture<OurStyleguideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurStyleguideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurStyleguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
