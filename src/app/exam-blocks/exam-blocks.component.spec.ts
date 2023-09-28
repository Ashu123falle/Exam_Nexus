import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamBlocksComponent } from './exam-blocks.component';

describe('ExamBlocksComponent', () => {
  let component: ExamBlocksComponent;
  let fixture: ComponentFixture<ExamBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamBlocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
