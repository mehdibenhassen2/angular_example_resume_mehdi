import { TestBed } from '@angular/core/testing';

import { DataCompanyService } from './data-company.service';

describe('DataCompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataCompanyService = TestBed.get(DataCompanyService);
    expect(service).toBeTruthy();
  });
});
