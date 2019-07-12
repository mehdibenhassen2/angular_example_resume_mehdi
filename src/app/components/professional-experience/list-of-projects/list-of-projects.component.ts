import { Component, OnInit } from '@angular/core';
import {DataCompanyService } from '../../../services/data-company.service'
import { TranslationEnFrService} from '../../../services/translation-en-fr.service';

@Component({
  selector: 'app-list-of-projects',
  templateUrl: './list-of-projects.component.html',
  styleUrls: ['./list-of-projects.component.scss']
})
export class ListOfProjectsComponent implements OnInit {


  projectList: Array<any>;
  
  constructor(public dataCompanyService: DataCompanyService,
              public translationEnFrService: TranslationEnFrService) {

   
  }


ngOnInit() {



    this.projectList = this.dataCompanyService.projectList;
    
}

}
