import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent {

  classes = [
    { name: 'First Year', id: 'First-Year' },
    { name: 'Second Year', id: 'Second-Year' },
    { name: 'Third Year', id: 'Third-Year' },
    { name: 'Fourth Year', id: 'Fourth-Year' }
  ];

  constructor(private router: Router) {}

  onClassClick(selectedClassId: string) {
    this.router.navigate(['/report-absent', selectedClassId]);
  }
}
