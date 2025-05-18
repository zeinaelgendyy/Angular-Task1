import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../book.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { switchMap, map } from 'rxjs/operators';
import { BestsellerPipe } from '../../pipes/bestseller.pipe';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, BestsellerPipe],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent implements OnInit {
  /** The book to display */
  book?: Book;

  constructor(private route: ActivatedRoute, private bookService: BookService) {}
  /**
   * Lifecycle hook to fetch the book by ID from route params
   */
  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),
      switchMap(id => this.bookService.getBookById(id))
    ).subscribe({
      next: result => this.book = result,
      error: () => this.book = undefined
    });
  }
}
