import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../auth/services/auth.service';
import { filter } from 'rxjs/operators';
/**
 * Header component shown across authenticated routes.
 * Hides itself on login/signup pages
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  /** Determines whether to show the header based on current route */
  isAuthPage = false;

  constructor(private authService: AuthService, private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isAuthPage = this.router.url === '/auth/login' || this.router.url === '/auth/signup';
      });
  }

  /**
   * Logs out the user and navigates to login page.
   */
  signOut(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
