import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfProjectsComponent } from './list-of-projects.component';

describe('ListOfProjectsComponent', () => {
  let component: ListOfProjectsComponent;
  let fixture: ComponentFixture<ListOfProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
