import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPieceComponent } from './blog-piece.component';

describe('BlogPieceComponent', () => {
  let component: BlogPieceComponent;
  let fixture: ComponentFixture<BlogPieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
