import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Handles new user registration by storing user credentials locally.
 */
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  /** Username to register */
  username = '';

  /** Password to register */
  password = '';

  constructor(private router: Router) {}

  /**
   * Saves new user credentials to local storage and navigates to login.
   */
  onSignup(): void {
    const user = { username: this.username, password: this.password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Signup successful! Please log in.');
    this.router.navigate(['/auth/login']);
  }
}
