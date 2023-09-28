import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report-service.service';
interface AbsentStudent {
  prn: string;
  studentname: string;
  year: string;
  programname:string;
  course: string;
  coursecode:string;
  block_no: string;
  date: string;
  attendance: boolean;
  malpractice: boolean
}

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit{
  reportData: AbsentStudent[] = [];

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.reportData = this.reportService.getReportData();
  }

}
