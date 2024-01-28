import { Component, OnInit } from '@angular/core';
import {DataCompanyService } from '../../services/data-company.service';
import { TranslationEnFrService} from '../../services/translation-en-fr.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../angular-material.module';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-software-skills',
  standalone:true,
  templateUrl: './software-skills.component.html',
  styleUrls: ['./software-skills.component.scss'],
  imports:[CommonModule, AngularMaterialModule, TranslateModule]
})
export class SoftwareSkillsComponent implements OnInit {
  softwareList: Array<any>;
  constructor(public dataCompanyService: DataCompanyService,
              public translationEnFrService: TranslationEnFrService) { }

  ngOnInit() {
    this.softwareList = this.dataCompanyService.softwareList;
  }

}
