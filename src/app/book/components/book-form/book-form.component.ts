import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { Book } from '../../book.model';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  /** Reactive form for book data */
  form!: FormGroup;

  /** Whether the form is in edit mode */
  isEditMode = false;

  /** ID of the book being edited */
  private bookId!: number;

  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  router = inject(Router);
  bookService = inject(BookService);

  /**
   * Initializes form and loads book data if editing
   */
  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      year: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      price: ['', [Validators.required, Validators.min(0)]],
      imageUrl: ['', Validators.required],
      description: ['']
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      this.bookId = +idParam;
      this.bookService.getBookById(this.bookId).subscribe(book => {
        if (book) this.form.patchValue(book);
      });
    }
  }

  /**
   * Handles form submission for creating or updating a book.
   */
  onSubmit(): void {
    if (this.form.invalid) return;

    const book: Book = { id: this.bookId, ...this.form.value };

    const obs = this.isEditMode
      ? this.bookService.updateBook(book)
      : this.bookService.createBook(book);

    obs.subscribe(() => this.router.navigate(['/books']));
  }

  /**
   * Deletes the current book 
   */
  onDelete(): void {
    if (this.isEditMode && this.bookId) {
      this.bookService.deleteBook(this.bookId).subscribe(() => {
        console.log('Book deleted successfully');
        this.router.navigate(['/books']);
      });
    }
  }
}
