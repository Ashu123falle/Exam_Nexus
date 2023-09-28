import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface MalpracticeStudent {
  prn: string;
  name: string;
  subject: string;
  exam_date: string;
  year: string;
}

@Component({
  selector: 'app-report-malpractice',
  templateUrl: './report-malpractice.component.html',
  styleUrls: ['./report-malpractice.component.css']
})
export class ReportMalpracticeComponent implements OnInit {
  malPracticeStudents: MalpracticeStudent[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchMalpracticeStudents();
  }

  fetchMalpracticeStudents(): void {
    this.http.get<MalpracticeStudent[]>('http://localhost:8000/api/MalPractice-students/all').subscribe(
      (data) => {
        this.malPracticeStudents = data;
      },
      (error) => {
        console.error('Error fetching malpractice students:', error);
      }
    );
  }
}
