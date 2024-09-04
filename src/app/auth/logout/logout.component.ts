// logout.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-logout',
  template: `<button (click)="onLogout()">Logout</button>`,
  styles: []
})
export class LogoutComponent {
  constructor(private authService: AuthService) { }

  onLogout(): void {
    this.authService.logout();
  }
}
