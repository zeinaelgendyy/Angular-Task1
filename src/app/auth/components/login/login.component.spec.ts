import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log in successfully', () => {
    component.username = 'testuser';
    component.password = 'testpass';
    authServiceSpy.login.and.returnValue(of({ token: 'mock-token' }));

    component.onLogin();

    expect(authServiceSpy.login).toHaveBeenCalledWith('testuser', 'testpass');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/books']);
  });

  it('should show error message on failed login', () => {
    authServiceSpy.login.and.returnValue(throwError(() => 'Invalid credentials'));

    component.onLogin();

    expect(component.errorMessage).toBe('Invalid username or password.');
  });
});
