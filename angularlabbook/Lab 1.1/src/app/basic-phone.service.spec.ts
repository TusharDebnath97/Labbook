import { TestBed } from '@angular/core/testing';

import { BasicPhoneService } from './basic-phone.service';

describe('BasicPhoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicPhoneService = TestBed.get(BasicPhoneService);
    expect(service).toBeTruthy();
  });
});
