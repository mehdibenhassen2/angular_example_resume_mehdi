import { Component, OnInit } from "@angular/core";
import { DataCompanyService } from "../../../services/data-company.service";
import { TranslationEnFrService } from "../../../services/translation-en-fr.service";
// for the tree
import { FlatTreeControl } from "@angular/cdk/tree";
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from "@angular/material/tree";

// import contentful service
import { ContentfulDataService } from "./../../../services/contentful-data.service";
import { Entry } from "contentful";
import * as contentful from "contentful";

import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
interface CompanyNode {
  name: string;
  logo?: string;
  children?: CompanyNode[];
}

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
let TREE_DATA: CompanyNode[] = [];
@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"],
})
export class TasksComponent implements OnInit {
  private tableCollected: Observable<any>;
  usedLanguage = this.translationEnFrService.language; // this one should be an observable
  private _transformer = (node: CompanyNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      logo: node.logo,
      level: level,
    };
  };
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  projectListContentfulObject = {};
  public projectListContentful: Array<any> = [];
  listOfTaskObservable$: Observable<any>;

  constructor(
    public translationEnFrService: TranslationEnFrService,
    public contentfulDataService: ContentfulDataService
  ) {
    this.usedLanguage = this.translationEnFrService.language;
    // get data from contentful,
    this.listOfTasks(environment.contentfulConfig.contentTypeIds.tasks);

  }

  designOption = "table_bootstrap";
  onChangeEvent(event) {
    this.designOption = event.target.value; // return option1
  }
  
  listOfTasks(contenID) {
    this.contentfulDataService
      .getAllContaintfulTaskData(contenID)
      .subscribe((res) => {
        console.log(res);
        this.projectListContentfulObject = res.fields.tasksByRole;
        console.log(this.projectListContentfulObject);
        for (let i in this.projectListContentfulObject) {
          //Pay attention to the 'in'
          this.projectListContentful.push(this.projectListContentfulObject[i]);
          for (let j in this.projectListContentful[i].fields.tasksListEn) {
            this.projectListContentful[i].fields.tasksListEn[j] = {
              name: this.projectListContentful[i].fields.tasksListEn[j],
            };
          }
          for (let j in this.projectListContentful[i].fields.taskListFr) {
            this.projectListContentful[i].fields.taskListFr[j] = {
              name: this.projectListContentful[i].fields.taskListFr[j],
            };
          }
        }
        
        for (let i = 0; i < this.projectListContentful.length; i++) {
          TREE_DATA.push({
            name: (this.usedLanguage == 'en' )? this.projectListContentful[i].fields.role : this.projectListContentful[i].fields.roleFr,
            logo: this.projectListContentful[i].fields.logo.fields.file.url,
            children: (this.usedLanguage == 'en' )? this.projectListContentful[i].fields.tasksListEn: this.projectListContentful[i].fields.taskListFr,
          });
        }
        this.dataSource.data = TREE_DATA;
      });
  }
  ngOnInit() {
    TREE_DATA = [];
  }
}
