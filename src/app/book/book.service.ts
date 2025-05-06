import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Book } from './book.model';
import { BookData } from './book-data';

const STORAGE_KEY = 'books_data';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = this.loadBooks();

  private loadBooks(): Book[] {
    const json = localStorage.getItem(STORAGE_KEY);
    if (json) {
      return JSON.parse(json) as Book[];
    }
    const bookData = new BookData();
    const db = bookData.createDb();
    return db.books;
  }

  private saveBooks(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.books));
  }

  getBooks(): Observable<Book[]> {
    return of(this.books); 
  }

  getBookById(id: number): Observable<Book | undefined> {
    const book = this.books.find(b => b.id === id);
    return of(book); 
  }

  createBook(book: Book): Observable<Book> {
    const existingBook = this.books.find(b => b.id === book.id);
    if (existingBook) {
      return throwError(() => new Error('Book with this ID already exists.'));
    }
    this.books.push(book);
    this.saveBooks();
    return of(book); 
  }

  updateBook(updatedBook: Book): Observable<Book> {
    const bookIndex = this.books.findIndex(b => b.id === updatedBook.id);
    if (bookIndex === -1) {
      return throwError(() => new Error('Book not found.'));
    }
    this.books[bookIndex] = updatedBook;
    this.saveBooks();
    return of(updatedBook);
  }

  deleteBook(id: number): Observable<void> {
    const bookIndex = this.books.findIndex(b => b.id === id);
    if (bookIndex === -1) {
      return throwError(() => new Error('Book not found.'));
    }
    this.books.splice(bookIndex, 1);
    this.saveBooks();
    return of(undefined); 
  }
}