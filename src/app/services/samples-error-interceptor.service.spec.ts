import { TestBed, inject } from '@angular/core/testing';

import { SamplesErrorInterceptorService } from './samples-error-interceptor.service';

describe('SamplesErrorInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SamplesErrorInterceptorService]
    });
  });

  it('should be created', inject([SamplesErrorInterceptorService], (service: SamplesErrorInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
