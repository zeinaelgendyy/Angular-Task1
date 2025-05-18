import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { Router, NavigationEnd } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerEventsSpy: any;

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['logout']);
    routerEventsSpy = {
      events: of(new NavigationEnd(1, '/auth/login', '/auth/login')),
      navigate: jasmine.createSpy('navigate')
    };

    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        { provide: Router, useValue: routerEventsSpy },
        { provide: AuthService, useValue: authServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create header', () => {
    expect(component).toBeTruthy();
  });

  it('should detect auth page route', () => {
    expect(component.isAuthPage).toBeTrue();
  });

  it('should call logout on signOut()', () => {
    component.signOut();
    expect(authServiceSpy.logout).toHaveBeenCalled();
    expect(routerEventsSpy.navigate).toHaveBeenCalledWith(['/auth/login']);
  });
});
