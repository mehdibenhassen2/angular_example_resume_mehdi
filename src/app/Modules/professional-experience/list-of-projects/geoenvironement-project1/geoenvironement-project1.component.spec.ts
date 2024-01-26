import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoenvironementProject1Component } from './geoenvironement-project1.component';

describe('GeoenvironementProject1Component', () => {
  let component: GeoenvironementProject1Component;
  let fixture: ComponentFixture<GeoenvironementProject1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoenvironementProject1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoenvironementProject1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
