import { TestBed, inject } from '@angular/core/testing';

import { ArticleDaoService } from './article-dao.service';

describe('ArticleDaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleDaoService]
    });
  });

  it('should be created', inject([ArticleDaoService], (service: ArticleDaoService) => {
    expect(service).toBeTruthy();
  }));
});
