import { TestBed } from '@angular/core/testing';

import { GetUtilisateursService } from './get-utilisateurs.service';

describe('GetUtilisateursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetUtilisateursService = TestBed.get(GetUtilisateursService);
    expect(service).toBeTruthy();
  });
});
