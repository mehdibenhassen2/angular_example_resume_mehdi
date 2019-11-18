import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareSkillsComponent } from './software-skills.component';

describe('SoftwareSkillsComponent', () => {
  let component: SoftwareSkillsComponent;
  let fixture: ComponentFixture<SoftwareSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
