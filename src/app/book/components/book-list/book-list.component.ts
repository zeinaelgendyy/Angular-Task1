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
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  /** List of all books */
  books: Book[] = [];

  /** Currently selected book */
  selectedBook?: Book;

  /** Whether the books are still loading */
  isLoading = true;

  constructor(private bookService: BookService, private router: Router) {}

  /**
   * Loads all books on component initialization.
   */
  ngOnInit(): void {
    this.loadBooks();
  }

  /**
   * Fetches books from the service and updates the list.
   */
  loadBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (data) => {
        this.books = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load books:', err);
        this.isLoading = false;
      }
    });
  }

  /**
   * Opens detail view for a selected book.
   * @param book The book to show details for
   */
  openDetails(book: Book): void {
    this.selectedBook = book;
  }

  /**
   * Closes the detail view.
   */
  closeDetails(): void {
    this.selectedBook = undefined;
  }

  /**
   * Navigates to the book add form.
   */
  onAdd(): void {
    this.router.navigate(['/books/add']);
  }

  /**
   * Navigates to the book edit form.
   * @param book The book to edit
   */
  onEdit(book: Book): void {
    this.router.navigate(['/books/edit', book.id]);
  }

  /**
   * Deletes a book by ID after user confirmation.
   * @param bookId The ID of the book to delete
   */
  onDelete(bookId: number): void {
    if (confirm('Are you sure you want to delete this book?')) {
      this.bookService.deleteBook(bookId).subscribe({
        next: () => {
          console.log('Book deleted successfully');
          this.loadBooks();
        },
        error: (err) => {
          console.error('Failed to delete book:', err);
        }
      });
    }
  }
}
