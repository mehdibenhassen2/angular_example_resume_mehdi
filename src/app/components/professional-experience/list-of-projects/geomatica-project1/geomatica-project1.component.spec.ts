import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeomaticaProject1Component } from './geomatica-project1.component';

describe('GeomaticaProject1Component', () => {
  let component: GeomaticaProject1Component;
  let fixture: ComponentFixture<GeomaticaProject1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeomaticaProject1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeomaticaProject1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
