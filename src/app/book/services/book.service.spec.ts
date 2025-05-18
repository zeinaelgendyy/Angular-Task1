import { TestBed } from '@angular/core/testing';
import { BookService } from './book.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Book } from '../book.model';

describe('BookService', () => {
  let service: BookService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService]
    });
    service = TestBed.inject(BookService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve books', () => {
    const mockBooks: Book[] = [{ id: 1, title: 'Test', author: 'Author', description: '', genre: '', imageUrl: '', year: 2020, price: 20 }];
    service.getBooks().subscribe(books => {
      expect(books.length).toBe(1);
      expect(books).toEqual(mockBooks);
    });

    const req = httpMock.expectOne('http://localhost:3000/Book');
    expect(req.request.method).toBe('GET');
    req.flush(mockBooks);
  });
});
