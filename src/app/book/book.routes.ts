import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { authGuard } from '../auth/auth.guard';

export const bookRoutes: Routes = [
  { path: '', component: BookListComponent, canActivate: [authGuard] },
  { path: 'add', loadComponent: () => import('./book-form/book-form.component').then(m => m.BookFormComponent), canActivate: [authGuard] },
  { path: 'edit/:id', loadComponent: () => import('./book-form/book-form.component').then(m => m.BookFormComponent), canActivate: [authGuard] },
  { path: ':id', component: BookDetailComponent, canActivate: [authGuard] },
];