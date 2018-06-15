import { TestBed, inject } from '@angular/core/testing';

import { SamplesHeaderInterceptorService } from './samples-header-interceptor.service';

describe('SamplesHeaderInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SamplesHeaderInterceptorService]
    });
  });

  it('should be created', inject([SamplesHeaderInterceptorService], (service: SamplesHeaderInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
