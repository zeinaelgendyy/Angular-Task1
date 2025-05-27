import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  onSignup(): void {
    const newUser = { username: this.username, password: this.password };
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

    const userExists = existingUsers.some((u: any) => u.username === this.username);

    if (userExists) {
      this.errorMessage = 'Username already exists. Choose another.';
      return;
    }

    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Set the last registered user as current user (for AuthService compatibility)
    localStorage.setItem('user', JSON.stringify(newUser));

    alert('Signup successful! Please log in.');
    this.router.navigate(['/auth/login']);
  }
}