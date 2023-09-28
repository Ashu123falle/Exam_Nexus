import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationReportService {

  constructor(private http: HttpClient) { }

  getAbsentValidationReport( examYear: string, selectedClass: string, selectedExam: string): Observable<any> {
    const url = `http://localhost:8000/api/absent-students/report/absent`; // Replace with your actual backend API endpoint
    return this.http.get<any>(url, {
      params: {
        examYear: examYear,
        year: selectedClass,
        examination: selectedExam
      }
    });
  }

  getMalPracticeValidationReport( examYear: string, selectedClass: string, selectedExam: string): Observable<any> {
    const url = `http://localhost:8000/api/MalPractice-students/report/malpractice`; // Replace with your actual backend API endpoint
    return this.http.get<any>(url, {
      params: {
        examYear: examYear,
        year: selectedClass,
        examination: selectedExam
      }
    });
  }

}
