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
  form!: FormGroup;
  isEditMode = false;
  private bookId!: number;

  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  router = inject(Router);
  bookService = inject(BookService);

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      year: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
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

  onSubmit(): void {
    if (this.form.invalid) return;

    const formValue = this.form.value;
    const book: Book = {
      id: this.bookId,
      ...formValue,
      year: Number(formValue.year),
      price: Number(formValue.price)
    };

    const obs = this.isEditMode
      ? this.bookService.updateBook(book)
      : this.bookService.createBook(book);

    obs.subscribe(() => this.router.navigate(['/books']));
  }

  onDelete(): void {
    if (this.isEditMode && this.bookId) {
      this.bookService.deleteBook(this.bookId).subscribe(() => {
        console.log('Book deleted successfully');
        this.router.navigate(['/books']);
      });
    }
  }
}
