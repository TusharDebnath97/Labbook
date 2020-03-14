import { TestBed } from '@angular/core/testing';

import { BooklistService } from './booklist.service';

describe('BooklistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooklistService = TestBed.get(BooklistService);
    expect(service).toBeTruthy();
  });
});
