import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityOfCalgaryProject1Component } from './university-of-calgary-project1.component';

describe('UniversityOfCalgaryProject1Component', () => {
  let component: UniversityOfCalgaryProject1Component;
  let fixture: ComponentFixture<UniversityOfCalgaryProject1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityOfCalgaryProject1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityOfCalgaryProject1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
