import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ViewCoursesComponent } from './dashboard/view-courses/view-courses.component';
import { CourseDetailsComponent } from './dashboard/course-details/course-details.component';
import { ManageCoursesComponent } from './dashboard/manage-courses/manage-courses.component';
import { EnrollStudentComponent } from './dashboard/enroll-student/enroll-student.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'view-courses', component: ViewCoursesComponent },
      { path: 'course-details/:id', component: CourseDetailsComponent },
      { path: 'manage-courses', component: ManageCoursesComponent },
      { path: 'enroll-student', component: EnrollStudentComponent }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
