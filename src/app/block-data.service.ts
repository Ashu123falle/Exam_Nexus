import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlockDataService {
  constructor(private http: HttpClient) {}

  getStudentDataByBlock(blockNumber: number) {
    // Replace 'your-backend-url' with the actual URL of your Spring Boot backend endpoint
    return this.http.get(`http://localhost:8000/users/blocks/${blockNumber}`);
  }
}
