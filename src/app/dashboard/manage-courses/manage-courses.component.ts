// manage-courses.component.ts
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course/course.service';
import { StudentService } from '../../services/student/student.service';

@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.css']
})
export class ManageCoursesComponent implements OnInit {
  courses: any[] = [];
  students: any[] = [];
  newCourse = { id: 1, title: '', description: '' };

  constructor(private courseService: CourseService, private studentService: StudentService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
    this.students = this.studentService.getStudents();
  }

  addCourse() {
    this.newCourse.id = this.courses.length + 1;
    this.courseService.addCourse(this.newCourse);
    this.newCourse = { id: 1, title: '', description: '' };
  }

  updateCourse(course: any) {
    this.courseService.updateCourse(course);
  }

  deleteCourse(id: number) {
    this.courseService.deleteCourse(id);
  }

  // getStudentsForCourse(courseId: number) {
  //   return this.courseService.getEnrollments().filter(enrollment => enrollment.courseId === course

}