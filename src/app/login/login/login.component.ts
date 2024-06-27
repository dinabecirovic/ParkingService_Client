/*import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.authService.login(this.model).subscribe(
      response => {
        console.log('Login successful', response);
        // Save tokens or other necessary data
        localStorage.setItem('token', response.token);
        localStorage.setItem('refreshToken', response.refreshToken);
        this.router.navigate(['/home']); // Navigate to home or another appropriate page
      },
      error => {
        console.error('Login failed', error);
        alert('Login failed: ' + error.error);
      }
    );
  }
}
*/