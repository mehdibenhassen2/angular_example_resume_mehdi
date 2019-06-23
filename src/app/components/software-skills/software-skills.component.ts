import { Component, OnInit } from '@angular/core';
import {DataCompanyService } from '../../services/data-company.service';

@Component({
  selector: 'app-software-skills',
  templateUrl: './software-skills.component.html',
  styleUrls: ['./software-skills.component.scss']
})
export class SoftwareSkillsComponent implements OnInit {
  softwareList: Array<any>;
  constructor(public dataCompanyService: DataCompanyService) { }

  ngOnInit() {
    this.softwareList = this.dataCompanyService.softwareList;
  }

}
