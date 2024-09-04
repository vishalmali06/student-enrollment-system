import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  enrollStudent(studentName: string, courseId: number): Observable<any> {
    // Mocking enrollment service
    console.log(`Enrolling ${studentName} in course ${courseId}`);
    return of({ success: true });
  }
}
