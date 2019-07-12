import { Component, OnInit } from '@angular/core';
import {DataCompanyService } from '../../../services/data-company.service'
import { TranslationEnFrService} from '../../../services/translation-en-fr.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  projectList: Array<any>;
    constructor(public dataCompanyService: DataCompanyService,
                public translationEnFrService: TranslationEnFrService) { }

  ngOnInit() {
    this.projectList = this.dataCompanyService.projectList;
    this.dataCompanyService.getData();
  }

}
