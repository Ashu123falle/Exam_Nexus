import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAbsentComponent } from './report-absent.component';

describe('ReportAbsentComponent', () => {
  let component: ReportAbsentComponent;
  let fixture: ComponentFixture<ReportAbsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportAbsentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportAbsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
