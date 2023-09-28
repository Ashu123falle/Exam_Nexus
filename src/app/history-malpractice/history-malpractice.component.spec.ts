import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryMalpracticeComponent } from './history-malpractice.component';

describe('HistoryMalpracticeComponent', () => {
  let component: HistoryMalpracticeComponent;
  let fixture: ComponentFixture<HistoryMalpracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryMalpracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryMalpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
