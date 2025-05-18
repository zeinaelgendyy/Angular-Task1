import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupComponent } from './signup.component';
import { Router } from '@angular/router';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [SignupComponent],
      providers: [{ provide: Router, useValue: routerSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should store user and navigate on signup', () => {
    component.username = 'newuser';
    component.password = 'pass123';

    spyOn(window.localStorage, 'setItem');
    spyOn(window, 'alert');

    component.onSignup();

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'user',
      JSON.stringify({ username: 'newuser', password: 'pass123' })
    );
    expect(window.alert).toHaveBeenCalledWith('Account created successfully!');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/auth/login']);
  });
});
