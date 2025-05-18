import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookDetailComponent } from './book-detail.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BookService } from '../../services/book.service';
import { Book } from '../../book.model';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;
  let mockBookService: jasmine.SpyObj<BookService>;

  const mockBook: Book = {
    id: 1,
    title: '1984',
    author: 'George Orwell',
    description: '',
    genre: '',
    imageUrl: '',
    year: 1949,
    price: 10
  };

  beforeEach(async () => {
    mockBookService = jasmine.createSpyObj('BookService', ['getBookById']);
    mockBookService.getBookById.and.returnValue(of(mockBook));

    await TestBed.configureTestingModule({
      imports: [BookDetailComponent],
      providers: [
        { provide: BookService, useValue: mockBookService },
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of({ get: () => '1' }) }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and load book details', () => {
    expect(component).toBeTruthy();
    expect(component.book?.title).toBe('1984');
  });
});
