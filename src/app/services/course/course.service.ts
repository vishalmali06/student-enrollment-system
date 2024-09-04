// course.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses = [
    { id: 1, title: 'Course 1', description: 'Description of Course 1' },
    { id: 2, title: 'Course 2', description: 'Description of Course 2' },
    // Add more mock courses as needed
  ];

  private enrollments = [
    { courseId: 1, studentId: 1 },
    { courseId: 2, studentId: 2 },
    // Add more mock enrollments as needed
  ];

  constructor() { }

  getCourses() {
    return this.courses;
  }

  getCourseById(id: number) {
    return this.courses.find(course => course.id === id);
  }

  addCourse(course: any) {
    this.courses.push(course);
  }

  updateCourse(updatedCourse: any) {
    const index = this.courses.findIndex(course => course.id === updatedCourse.id);
    if (index !== -1) {
      this.courses[index] = updatedCourse;
    }
  }

  deleteCourse(id: number) {
    this.courses = this.courses.filter(course => course.id !== id);
  }

  getEnrollments() {
    return this.enrollments;
  }

  enrollStudent(courseId: number, studentId: number) {
    this.enrollments.push({ courseId, studentId });
  }
}
