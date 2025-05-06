import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  onSignup() {
    const user = { username: this.username, password: this.password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Account created successfully!');
    this.router.navigate(['/login']);
  }
}