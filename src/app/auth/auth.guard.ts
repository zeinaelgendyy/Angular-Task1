import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAuthenticated = localStorage.getItem('user') !== null;

  if (isAuthenticated) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};