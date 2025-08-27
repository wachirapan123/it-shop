import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { NotificationService } from '../../notification.service'; // <-- import service

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private auth: AuthService, 
    private router: Router,
    private notification: NotificationService // <-- inject
  ) {}

  login() {
    this.auth.login(this.username, this.password)
      .subscribe((res: { token?: string; error?: string }) => {
        if (res.token) {
          // ใช้ Notification แทน alert
          this.notification.show('Login Success 🎉');

          if (this.username === 'admin') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/']); 
          }
        } else {
          this.notification.show('Login Failed ❌');
        }
      });
  }
}
