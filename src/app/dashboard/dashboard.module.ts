import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ManageCoursesComponent } from './manage-courses/manage-courses.component';
import { EnrollStudentComponent } from './enroll-student/enroll-student.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ViewCoursesComponent,
    CourseDetailsComponent,
    ManageCoursesComponent,
    EnrollStudentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class DashboardModule { }
