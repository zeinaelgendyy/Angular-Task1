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
    this.loadBooks(); 
  }

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

  onDelete(bookId: number): void {
    console.log('Delete triggered for book ID:', bookId); 
  
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
