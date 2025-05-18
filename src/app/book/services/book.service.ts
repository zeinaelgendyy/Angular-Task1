import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book.model';
/**
 * Service for performing CRUD operations on books.
 */
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:3000/Book';  
  
  constructor(private http: HttpClient) {}
  /**
   * Retrieves all books.
   * @returns Observable of book array.
   */
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  /**
   * Retrieves a book by its ID.
   * @param id - Book ID.
   * @returns Observable of a single book.
   */
  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  /**
   * Creates a new book.
   * @param book - Book object to create.
   * @returns Observable of created book.
   */
  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  /**
   * Updates an existing book.
   * @param book - Updated book object.
   * @returns Observable of updated book.
   */
  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/${book.id}`, book);
  }
  
  /**
   * Deletes a book by its ID.
   * @param id - Book ID.
   * @returns Observable that completes when deletion is done.
   */
  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
