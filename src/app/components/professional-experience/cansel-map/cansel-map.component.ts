import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cansel-map',
  template: 'https://cansel.maps.arcgis.com/apps/webappviewer/index.html?id=502518c2668641d3b99f406000ee3210',
  styleUrls: ['./cansel-map.component.scss']
})
export class CanselMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
