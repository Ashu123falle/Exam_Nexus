import { Component, Input } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { StudentService } from '../student.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-absent-report',
  templateUrl: './absent-report.component.html',
  styleUrls: ['./absent-report.component.css']
})
export class AbsentReportComponent {
  @Input() absentStudents: any[] = [];

  constructor(private dataSharingService: DataSharingService,private studentService: StudentService,
    private http: HttpClient) {}
  ngOnInit(): void {
    // Retrieve the absent students' data from the service
    this.absentStudents = this.dataSharingService.getAbsentStudents();
  }
  saveReport() {
    // Your existing code to prepare the absentStudents data
  
    this.studentService.saveAbsentStudents(this.absentStudents).subscribe(
      (response: any) => {
        // Check if the response contains the expected success message
        if (response && response === 'Data saved successfully') {
          // Data saved successfully, perform any additional actions if needed
          console.log('Data saved successfully');
        } else {
          // Handle any unexpected response here
          console.error('Unexpected response from the server:', response);
        }
      },
      (error) => {
        console.error('Error saving data:', error);
      }
    );
    Swal.fire({
      icon: 'success',
      title: 'Data saved successfully',
      showConfirmButton: false,
      timer: 1500 // Auto-close the alert after 1.5 seconds
    });
  }
  
  
  printReport() {
    window.print();
  }
}
