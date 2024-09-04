import { Component } from '@angular/core';
import { EnrollmentService } from '../../services/enrollment/enrollment.service';


@Component({
  selector: 'app-enroll-student',
  templateUrl: './enroll-student.component.html',
  styleUrls: ['./enroll-student.component.css']
})
export class EnrollStudentComponent {
  studentName: string = '';
  courseId: number | null = null;
  message: string = '';

  constructor(private enrollmentService: EnrollmentService) { }

  enrollStudent() {
    if (this.studentName && this.courseId !== null) {
      this.enrollmentService.enrollStudent(this.studentName, this.courseId).subscribe(
        response => {
          this.message = 'Student enrolled successfully';
        },
        error => {
          this.message = 'Error enrolling student';
        }
      );
    } else {
      this.message = 'Please provide student name and course ID';
    }
  }
}
