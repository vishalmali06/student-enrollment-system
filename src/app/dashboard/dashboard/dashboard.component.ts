// dashboard.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private authService: AuthService) { }

  get isAdmin(): boolean {
    const currentUser = this.authService.getCurrentUser();
    return currentUser && currentUser.role === 'admin';
  }

  logout() {
    this.authService.logout();
  }
}
