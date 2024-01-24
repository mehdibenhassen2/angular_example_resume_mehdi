import { Component, OnInit } from '@angular/core';
import { DataCompanyService } from '../../../services/data-company.service'
import { TranslationEnFrService } from '../../../services/translation-en-fr.service';
// for the tree
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
interface CompanyNode {
  name: string;
  children?: CompanyNode[];
  logo: string;
}



/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
   TREE_DATA: CompanyNode[] = [];
  private _transformer = (node: CompanyNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      logo: node.logo,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);



  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  projectList: Array<any>;

  constructor(public dataCompanyService: DataCompanyService,
              public translationEnFrService: TranslationEnFrService) {
  }
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  designOption = 'table_bootstrap';
  onChangeEvent(event) {
    this.designOption = event.target.value; // return option1

  }
  transforDataTree() {

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.projectList.length; i++) {
      this.TREE_DATA.push({ name: this.projectList[i].company, logo: this.projectList[i].logo,   children: this.projectList[i].tasks });

    }
    return this.TREE_DATA;
  }
  ngOnInit() {
    this.projectList = this.dataCompanyService.projectList;
    this.dataCompanyService.getData();
    this.transforDataTree();
    this.dataSource.data = this.TREE_DATA;

  }

}

