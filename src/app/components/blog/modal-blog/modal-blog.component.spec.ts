import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBlogComponent } from './modal-blog.component';

describe('ModalBlogComponent', () => {
  let component: ModalBlogComponent;
  let fixture: ComponentFixture<ModalBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
