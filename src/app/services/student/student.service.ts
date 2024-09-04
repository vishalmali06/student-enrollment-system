// student.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students = [
    { id: 1, name: 'Student 1' },
    { id: 2, name: 'Student 2' },
    // Add more mock students as needed
  ];

  constructor() { }

  getStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    return this.students.find(student => student.id === id);
  }
}
