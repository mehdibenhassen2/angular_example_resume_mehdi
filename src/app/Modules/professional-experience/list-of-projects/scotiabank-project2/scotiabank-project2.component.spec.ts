import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScotiabankProject2Component } from './scotiabank-project2.component';

describe('ScotiabankProject2Component', () => {
  let component: ScotiabankProject2Component;
  let fixture: ComponentFixture<ScotiabankProject2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScotiabankProject2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScotiabankProject2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
