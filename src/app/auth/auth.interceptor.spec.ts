import { TestBed } from '@angular/core/testing';
import { HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

describe('AuthInterceptor', () => {
  let interceptor: AuthInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    interceptor = new AuthInterceptor();
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should intercept HTTP requests', () => {
    const request = new HttpRequest('GET', '/test');
    const handler: HttpHandler = {
      handle: (req: HttpRequest<any>) => {
        // Optionally, assert something here
        return {
          subscribe: () => {}
        } as any;
      }
    };

    const result = interceptor.intercept(request, handler);
    expect(result).toBeTruthy();
  });
});
