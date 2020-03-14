import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectDetailedComponent } from './architect-detailed.component';

describe('ArchitectDetailedComponent', () => {
  let component: ArchitectDetailedComponent;
  let fixture: ComponentFixture<ArchitectDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitectDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitectDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
