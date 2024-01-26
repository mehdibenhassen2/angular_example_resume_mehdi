import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickatellProject1Component } from './clickatell-project1.component';

describe('ClickatellProject1Component', () => {
  let component: ClickatellProject1Component;
  let fixture: ComponentFixture<ClickatellProject1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickatellProject1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickatellProject1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
