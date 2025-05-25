import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

/**
 * Handles user login form and authentication logic.
 */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  /** Username entered by user */
  username = '';

  /** Password entered by user */
  password = '';

  /** Message shown when login fails */
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Attempts to log the user in using the AuthService.
   */
  onLogin(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        localStorage.setItem('user', JSON.stringify({ username: this.username }));
        this.router.navigate(['/books']);
      },
      error: () => {
        this.errorMessage = 'Invalid username or password.';
      }
    });
  }
}
