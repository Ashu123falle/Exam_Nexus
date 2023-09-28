import { Injectable } from '@angular/core';

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
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private reportData: AbsentStudent[] = [];
  reportType!:string;
  examination!:string;
  class!:string;

  setReportData(data: AbsentStudent[]) {
    this.reportData = data;
  }
  setReportProperty(type:string,exam:string,Class:string){
    this.reportType=type;
    this.examination=exam;
    this.class=Class;
  }

  getReportData() {
    return this.reportData;
  }
}
