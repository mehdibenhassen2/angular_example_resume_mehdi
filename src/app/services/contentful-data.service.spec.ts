import { TestBed } from '@angular/core/testing';

import { ContentfulDataService } from './contentful-data.service';

describe('ContentfulDataService', () => {
  let service: ContentfulDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentfulDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
