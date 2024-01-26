import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanselMapComponent } from './cansel-map.component';

describe('CanselMapComponent', () => {
  let component: CanselMapComponent;
  let fixture: ComponentFixture<CanselMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanselMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanselMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
