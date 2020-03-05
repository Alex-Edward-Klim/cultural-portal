import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfArchitectsComponent } from './list-of-architects.component';

describe('ListOfArchitectsComponent', () => {
  let component: ListOfArchitectsComponent;
  let fixture: ComponentFixture<ListOfArchitectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfArchitectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfArchitectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
