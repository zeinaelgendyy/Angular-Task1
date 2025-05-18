import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { authGuard } from '../auth/guards/auth.guard';

export const bookRoutes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'add', loadComponent: () => import('./components/book-form/book-form.component').then(m => m.BookFormComponent) },
  { path: 'edit/:id', loadComponent: () => import('./components/book-form/book-form.component').then(m => m.BookFormComponent) },
  { path: ':id', component: BookDetailComponent },
];