import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface MalpracticeStudent {
  prn: string;
  studentname: string;
  year: string;
  programname: string;
  course: string;
  coursecode: string;
  block_no: string;
  date: string;
  attendance: boolean;
  malpractice: boolean;
}

@Component({
  selector: 'app-history-malpractice',
  templateUrl: './history-malpractice.component.html',
  styleUrls: ['./history-malpractice.component.css',]
  
})
export class HistoryMalpracticeComponent implements OnInit {
  originalMalpracticeStudents: MalpracticeStudent[] = [];
  malPracticeStudents: MalpracticeStudent[] = [];
  availableClasses = ['First-Year', 'Second-Year', 'Third-Year', 'Fourth-Year'];
  availablePrograms = ['CSE', 'CIVIL', 'MECHANICAL', 'ELECTRICAL', 'AIDS'];
  selectedClass = '';
  selectedProgram = '';
  selectedDate = '';
  isLoading: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchMalpracticeStudents();
  }

  fetchMalpracticeStudents(): void {
    this.http.get<MalpracticeStudent[]>('http://localhost:8000/api/MalPractice-students/all').subscribe(
      (data) => {
        this.originalMalpracticeStudents = data;
        this.malPracticeStudents = [...data]; // Make a copy
        this.isLoading = false; // Set isLoading to false once data is received
      },
      (error) => {
        console.error('Error fetching malpractice students:', error);
        this.isLoading = false; // Make sure to handle errors and set isLoading to false
      }
    );
  }

  applyFilters(): void {
    let filteredStudents = this.originalMalpracticeStudents;

    if (this.selectedClass) {
      filteredStudents = filteredStudents.filter(student => student.year.includes(this.selectedClass));
    }

    if (this.selectedProgram) {
      filteredStudents = filteredStudents.filter(student => student.programname.includes(this.selectedProgram));
    }

    if (this.selectedDate) {
      filteredStudents = filteredStudents.filter(student => student.date === this.selectedDate);
    }

    this.malPracticeStudents = filteredStudents;
  }

  clearFilters(): void {
    this.selectedClass = '';
    this.selectedProgram = '';
    this.selectedDate = '';
    this.malPracticeStudents = this.originalMalpracticeStudents;
  }
  
}
