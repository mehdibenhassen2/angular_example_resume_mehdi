import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceChartComponent } from './experience-chart.component';

describe('ExperienceChartComponent', () => {
  let component: ExperienceChartComponent;
  let fixture: ComponentFixture<ExperienceChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
