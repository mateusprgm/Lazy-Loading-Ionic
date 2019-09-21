import { TestBed } from '@angular/core/testing';

import { GithubDataService } from './github-data.service';

describe('GithubDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubDataService = TestBed.get(GithubDataService);
    expect(service).toBeTruthy();
  });
});
