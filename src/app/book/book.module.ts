import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFormComponent } from './book-form/book-form.component';

import { bookRoutes } from './book.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(bookRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    BookListComponent,      
    BookDetailComponent,
    BookFormComponent,  
  ]
})
export class BookModule {}