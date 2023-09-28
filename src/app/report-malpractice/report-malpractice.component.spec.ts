import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMalpracticeComponent } from './report-malpractice.component';

describe('ReportMalpracticeComponent', () => {
  let component: ReportMalpracticeComponent;
  let fixture: ComponentFixture<ReportMalpracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportMalpracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportMalpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
