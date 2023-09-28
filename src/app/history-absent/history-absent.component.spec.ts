import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryAbsentComponent } from './history-absent.component';

describe('HistoryAbsentComponent', () => {
  let component: HistoryAbsentComponent;
  let fixture: ComponentFixture<HistoryAbsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryAbsentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryAbsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
