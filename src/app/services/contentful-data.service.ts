import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { Observable, from } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulDataService {

  constructor() { }
  taskListObservable:Observable<any>
  private clients= contentful.createClient({
    space:environment.contentfulConfig.spaceId,
    accessToken: environment.contentfulConfig.accessToken,
   
  })
  getAllContaintfulTaskData(contentId) {
    const promise= this.clients.getEntry(contentId)
    console.log(promise);
    return   this.taskListObservable=from(promise) //to convert promise to observable
}
}