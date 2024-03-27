import { Component, OnInit } from '@angular/core';
import {DataCompanyService } from '../../../services/data-company.service'
import { TranslationEnFrService} from '../../../services/translation-en-fr.service';
import {TranslateService} from '@ngx-translate/core';
// import contentful service
import { ContentfulDataService } from "./../../../services/contentful-data.service";
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-list-of-projects',
  templateUrl: './list-of-projects.component.html',
  styleUrls: ['./list-of-projects.component.scss']
})
export class ListOfProjectsComponent implements OnInit {

  projectListContentfulObject = {};
  public projectListContentful: Array<any> = [];
  projectList: Array<any>;
  
  constructor(public dataCompanyService: DataCompanyService,
              public translationEnFrService: TranslationEnFrService,
              public contentfulDataService: ContentfulDataService) {

       // get data from contentful,
       this.listOfTasks(environment.contentfulConfig.contentTypeIds.tasks);
  }

  listOfTasks(contenID) {
    this.contentfulDataService
      .getAllContaintfulTaskData(contenID)
      .subscribe((res) => {
        this.projectListContentfulObject = res.items[0].fields.tasksByRole;
        for (let i in this.projectListContentfulObject) {
          
           
          this.projectListContentful.push(this.projectListContentfulObject[i]);
        }
        console.log('data:');
        console.log(this.projectListContentful);
       

  });
  }
ngOnInit() {
  this.projectList = this.dataCompanyService.projectList;



    
}

}
