import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadPageComponent } from './head-page.component';

describe('HeadPageComponent', () => {
  let component: HeadPageComponent;
  let fixture: ComponentFixture<HeadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
