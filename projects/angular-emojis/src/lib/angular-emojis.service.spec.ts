import { TestBed } from '@angular/core/testing';

import { AngularEmojisService } from './angular-emojis.service';

describe('AngularEmojisService', () => {
  let service: AngularEmojisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularEmojisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
