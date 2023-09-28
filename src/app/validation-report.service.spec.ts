import { TestBed } from '@angular/core/testing';

import { ValidationReportService } from './validation-report.service';

describe('ValidationReportService', () => {
  let service: ValidationReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
