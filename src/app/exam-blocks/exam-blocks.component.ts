import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { HttpClient } from '@angular/common/http';
import { Student } from '../student.model';
import { DataSharingService } from '../data-sharing.service';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-exam-blocks',
  templateUrl: './exam-blocks.component.html',
  styleUrls: ['./exam-blocks.component.css']
})
export class ExamBlocksComponent implements OnInit {
  selectedDate!: string;
  studentData: Student[] = [];
  blockNumber!: string;
  isLoading = false;

  examBlocks = [
    { name: 'Block 1', id: '1' },
    { name: 'Block 2', id: '2' },
    { name: 'Block 3', id: '3' },
    { name: 'Block 4', id: '4' },
    { name: 'Block 5', id: '5' },
    { name: 'Block 6', id: '6' },
    { name: 'Block 7', id: '7' },
    { name: 'Block 8', id: '8' },
    { name: 'Block 9', id: '9' },
    { name: 'Block 10', id: '10' },
    { name: 'Block 11', id: '11' },
    { name: 'Block 12', id: '12' },
    { name: 'Block 13', id: '13' },
    { name: 'Block 14', id: '14' },
    { name: 'Block 15', id: '15' },
    { name: 'Block 16', id: '16' },
    { name: 'Block 17', id: '17' },
    { name: 'Block 18', id: '18' },
    { name: 'Block 19', id: '19' },
    { name: 'Block 20', id: '20' },



    // Add more blocks with unique IDs as needed
  ];

  private apiUrl = 'http://localhost:8000/users/blocks';

  constructor(
    private router: Router,
    private studentService: StudentService,
    private http: HttpClient,
    private sharedData: DataSharingService
  ) {}

  ngOnInit(): void {}

  onBlockClick(block: any): void {
    this.blockNumber = block.id;
    this.isLoading = true;
    this.loadStudentData();
    
  }
  onDateChange(event: any): void {
    this.selectedDate = event.value; // Update selectedDate with the selected date
  }
  
  trackById(index: number, block: any): string {
    return block.id; // Assuming each block has a unique ID
  }
  
  async loadStudentData(): Promise<void> {
    const params = {
      blockNo: this.blockNumber,
      selectedDate: this.selectedDate
    };
  
    try {
      const data = await this.http.get<Student[]>(this.apiUrl, { params }).toPromise();
      if (data) {
        this.studentData = data;
        this.sharedData.studentData = data;
        this.sharedData.setProperty(this.selectedDate,this.blockNumber);

      } else {
        console.error('Error loading student data: Response is undefined');
      }
    } catch (error) {
      console.error('Error loading student data:', error);
    }
    finally {
      this.isLoading = false; // Set loading flag to false when data loading is complete
      this.router.navigate(['/students']);
    }

  }
  
}
