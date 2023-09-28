import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '../report-service.service';
import { ThisReceiver } from '@angular/compiler';

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
  selector: 'app-report-absent',
  templateUrl: './report-absent.component.html',
  styleUrls: ['./report-absent.component.css']
})
export class ReportAbsentComponent implements OnInit {
  reportData: AbsentStudent[] = [];
  absentStudents: AbsentStudent[] = [];
  examination!:string;
  class!:string;
  intialdate='10/10/2022';
  enddate='30/10/2022';
  reportType!:String;

  constructor(private route: ActivatedRoute, private http: HttpClient,  private reportService: ReportService) {}

  ngOnInit(): void {
    this.reportData = this.reportService.getReportData();
    this.reportType=this.reportService.reportType;
    this.examination=this.reportService.examination;
    this.class=this.reportService.class;
  }
  
  printReport(): void {
    window.print();
  }
}
