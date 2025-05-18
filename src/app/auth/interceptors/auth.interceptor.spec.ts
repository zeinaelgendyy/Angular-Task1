import { TestBed } from '@angular/core/testing';
import { HttpHandler, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';

describe('AuthInterceptor', () => {
  let interceptor: AuthInterceptor;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['getToken']);
    TestBed.configureTestingModule({
      providers: [
        AuthInterceptor,
        { provide: AuthService, useValue: authServiceSpy }
      ]
    });
    interceptor = TestBed.inject(AuthInterceptor);
  });

  it('should add Authorization header if token exists', () => {
    authServiceSpy.getToken.and.returnValue('mock-token');

    const req = new HttpRequest('GET', '/test');
    const next: HttpHandler = {
      handle: (request: HttpRequest<any>) => {
        expect(request.headers.get('Authorization')).toBe('Bearer mock-token');
        return of({} as HttpEvent<any>);
      }
    };

    interceptor.intercept(req, next).subscribe();
  });

  it('should not add Authorization header if token is missing', () => {
    authServiceSpy.getToken.and.returnValue(null);

    const req = new HttpRequest('GET', '/test');
    const next: HttpHandler = {
      handle: (request: HttpRequest<any>) => {
        expect(request.headers.has('Authorization')).toBeFalse();
        return of({} as HttpEvent<any>);
      }
    };

    interceptor.intercept(req, next).subscribe();
  });
});
