import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsentReportHomeComponent } from './absent-report-home.component';

describe('AbsentReportHomeComponent', () => {
  let component: AbsentReportHomeComponent;
  let fixture: ComponentFixture<AbsentReportHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsentReportHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsentReportHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
