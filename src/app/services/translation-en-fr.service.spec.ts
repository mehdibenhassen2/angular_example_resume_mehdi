import { TestBed } from '@angular/core/testing';

import { TranslationEnFrService } from './translation-en-fr.service';

describe('TranslationEnFrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranslationEnFrService = TestBed.get(TranslationEnFrService);
    expect(service).toBeTruthy();
  });
});
