import { TestBed } from '@angular/core/testing';

import { ImgExternalUrlService } from './img-external-url.service';

describe('ImgExternalUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImgExternalUrlService = TestBed.get(ImgExternalUrlService);
    expect(service).toBeTruthy();
  });
});
