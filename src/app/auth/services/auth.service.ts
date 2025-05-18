import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/**
 * Mock authentication service for login/logout handling.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private authUrl = '/login';
  constructor(private http: HttpClient) {}
  /**
   * Logs in a user by validating credentials with local storage.
   * @param username - Username input.
   * @param password - Password input.
   * @returns Observable emitting token or error.
   */
  login(username: string, password: string): Observable<any> {
    return new Observable(observer => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.username === username && user.password === password) {
          const fakeToken = 'mock-token';
          localStorage.setItem('token', fakeToken);
          observer.next({ token: fakeToken });
          observer.complete();
        } else {
          observer.error('Invalid credentials');
        }
      } else {
        observer.error('No user found');
      }
    });
  }

  /**
   * Logs out the user by clearing local storage.
   */
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  /**
   * Retrieves the stored authentication token.
   * @returns Token string or null.
   */
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  /**
   * Checks if a user is currently logged in.
   * @returns True if logged in, false otherwise.
   */
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
