import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AngularMaterialModule } from 'src/app/angular-material.module';


@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  standalone:true,
  styleUrls: ['./code.component.scss'], 
  imports:[CommonModule, AngularMaterialModule, TranslateModule]
})
export class CodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
