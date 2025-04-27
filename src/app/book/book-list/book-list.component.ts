import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [ RouterModule, CommonModule ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  selectedBook?: Book;

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  onSelect(book: Book): void {
    this.router.navigate(['/book', book.id]);
  }

  openDetails(book: Book) {
    this.selectedBook = book;
  }

  closeDetails() {
    this.selectedBook = undefined;
  }
}
