import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { BestsellerPipe } from '../bestseller.pipe';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [RouterModule, CommonModule, BestsellerPipe],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  selectedBook?: Book;
  isLoading = true;

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
      this.isLoading = false;
    });
  }

  openDetails(book: Book) {
    this.selectedBook = book;
  }

  closeDetails() {
    this.selectedBook = undefined;
  }

  onAdd(): void {
    this.router.navigate(['/books/add']);
  }

  onEdit(book: Book): void {
    this.router.navigate(['/books/edit', book.id]);
  }
}