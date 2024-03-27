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
        console.log(res);
        this.projectListContentfulObject = res.fields.tasksByRole;
        for (let i in this.projectListContentfulObject) {
          for (let j in this.projectListContentfulObject[i].fields.projects)
         { 
          this.contentfulDataService.getAllContaintfulTaskData(this.projectListContentfulObject[i].fields.projects[j].sys.id).subscribe((res) => {
          this.projectListContentfulObject[i].fields.projects[j] = res;
        console.log('projet');
        console.log(res);
        })
           
          this.projectListContentful.push(this.projectListContentfulObject[i]);
        }
        console.log(this.projectListContentful);
       
        // for (let i = 0; i < this.projectListContentful.length; i++) {
        //   TREE_DATA.push({
        //     name: (this.usedLanguage == 'en' )? this.projectListContentful[i].fields.role : this.projectListContentful[i].fields.roleFr,
        //     logo: this.projectListContentful[i].fields.logo.fields.file.url,
        //     children: (this.usedLanguage == 'en' )? this.projectListContentful[i].fields.tasksListEn: this.projectListContentful[i].fields.taskListFr,
        //   });
        // }
        // this.dataSource.data = TREE_DATA;
  }});
  }
ngOnInit() {



    this.projectList = this.dataCompanyService.projectList;
    
}

}
