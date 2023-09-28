import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  private absentApiUrl = 'http://localhost:8000/api/absent-students/save';
  private malpracticeApiUrl = 'http://localhost:8000/api/MalPractice-students/save';

  constructor(private http: HttpClient) { }

  saveAbsentStudents(absentStudents: any) {
    return this.http.post(this.absentApiUrl, absentStudents);
  }
  saveMalpracticeStudents(malpracticeStudents:any){
    return this.http.post(this.malpracticeApiUrl,malpracticeStudents)
  }
}
