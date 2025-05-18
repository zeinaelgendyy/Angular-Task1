import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });

    service = TestBed.inject(AuthService);
    localStorage.clear(); // Clear storage before each test
  });

  describe('login', () => {
    it('should log in successfully with correct credentials', (done) => {
      const user = { username: 'testuser', password: 'password' };
      localStorage.setItem('user', JSON.stringify(user));

      service.login('testuser', 'password').subscribe({
        next: (result) => {
          expect(result.token).toBe('mock-token');
          expect(localStorage.getItem('token')).toBe('mock-token');
          done();
        },
        error: () => {
          fail('Should not error for correct credentials');
          done();
        }
      });
    });

    it('should error on incorrect credentials', (done) => {
      const user = { username: 'testuser', password: 'password' };
      localStorage.setItem('user', JSON.stringify(user));

      service.login('testuser', 'wrongpass').subscribe({
        next: () => {
          fail('Should not succeed with wrong credentials');
          done();
        },
        error: (err) => {
          expect(err).toBe('Invalid credentials');
          done();
        }
      });
    });

    it('should error if no user found in localStorage', (done) => {
      service.login('nouser', 'nopass').subscribe({
        next: () => {
          fail('Should not succeed without user');
          done();
        },
        error: (err) => {
          expect(err).toBe('No user found');
          done();
        }
      });
    });
  });

  describe('logout', () => {
    it('should remove token and user from localStorage', () => {
      localStorage.setItem('token', 'mock-token');
      localStorage.setItem('user', JSON.stringify({ username: 'testuser' }));

      service.logout();

      expect(localStorage.getItem('token')).toBeNull();
      expect(localStorage.getItem('user')).toBeNull();
    });
  });

  describe('getToken', () => {
    it('should return token from localStorage', () => {
      localStorage.setItem('token', 'mock-token');
      expect(service.getToken()).toBe('mock-token');
    });

    it('should return null if token not set', () => {
      expect(service.getToken()).toBeNull();
    });
  });

  describe('isLoggedIn', () => {
    it('should return true if token exists', () => {
      localStorage.setItem('token', 'mock-token');
      expect(service.isLoggedIn()).toBeTrue();
    });

    it('should return false if no token exists', () => {
      expect(service.isLoggedIn()).toBeFalse();
    });
  });
});
