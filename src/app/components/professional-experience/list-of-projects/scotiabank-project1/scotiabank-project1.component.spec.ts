import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScotiabankProject1Component } from './scotiabank-project1.component';

describe('ScotiabankProject1Component', () => {
  let component: ScotiabankProject1Component;
  let fixture: ComponentFixture<ScotiabankProject1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScotiabankProject1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScotiabankProject1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
