import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { Book } from '../../book.model';
import { BestsellerPipe } from '../../pipes/bestseller.pipe';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [RouterModule, CommonModule, BestsellerPipe],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  /** List of all books */
  books: Book[] = [];

  /** Currently selected book */
  selectedBook?: Book;

  /** Loading state */
  isLoading = true;

  constructor(private bookService: BookService, private router: Router) {}

  /** Load books when component initializes */
  ngOnInit(): void {
    this.loadBooks();
  }

  /** Fetches books from the service */
  loadBooks(): void {
    this.isLoading = true;
    this.bookService.getBooks().subscribe({
      next: (data) => {
        this.books = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load books:', err);
        this.isLoading = false;
      },
    });
  }

  /** Show details modal for the selected book */
  openDetails(book: Book): void {
    this.selectedBook = book;
  }

  /** Close the details modal */
  closeDetails(): void {
    this.selectedBook = undefined;
  }

  /** Navigate to Add Book page */
  onAdd(): void {
    this.router.navigate(['/books/add']);
  }

  /** Navigate to Edit Book page */
  onEdit(book: Book): void {
    this.router.navigate(['/books/edit', book.id]);
  }

  /** Delete book with confirmation */
  onDelete(bookId: number): void {
    if (confirm('Are you sure you want to delete this book?')) {
      this.bookService.deleteBook(bookId).subscribe({
        next: () => this.loadBooks(),
        error: (err) => alert('Delete failed: ' + err.message),
      });
    }
  }
}
