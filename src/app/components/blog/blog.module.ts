import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { ModalBlogComponent } from './modal-blog/modal-blog.component';
import { BlogPieceComponent } from './blog-piece/blog-piece.component';
import { MatDialogModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatDialog } from '@angular/material'; // service
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [BlogComponent, ModalBlogComponent, BlogPieceComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  providers: [MatDialog],
  entryComponents: [ModalBlogComponent]
})
export class BlogModule { }
