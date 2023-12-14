import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { ModalBlogComponent } from './modal-blog/modal-blog.component';
import { BlogPieceComponent } from './blog-piece/blog-piece.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog'; // service
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  providers: [MatDialog],
})
export class BlogModule { }
