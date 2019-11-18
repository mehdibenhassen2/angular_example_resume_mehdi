import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTreeModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule, // to add tab from material agular
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule

  ],
  exports: [
    MatTreeModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule
  ]
})
export class AngularMaterialModule { }
