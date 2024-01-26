import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuredConnectProject1Component } from './insured-connect-project1.component';

describe('InsuredConnectProject1Component', () => {
  let component: InsuredConnectProject1Component;
  let fixture: ComponentFixture<InsuredConnectProject1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuredConnectProject1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuredConnectProject1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
