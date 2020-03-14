import { TestBed } from '@angular/core/testing';

import { SmartPhoneService } from './smart-phone.service';

describe('SmartPhoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmartPhoneService = TestBed.get(SmartPhoneService);
    expect(service).toBeTruthy();
  });
});
