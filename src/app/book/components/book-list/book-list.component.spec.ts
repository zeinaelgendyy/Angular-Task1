import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookListComponent } from './book-list.component';
import { BookService } from '../../services/book.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Book } from '../../book.model';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let mockBookService: jasmine.SpyObj<BookService>;
  let mockRouter: jasmine.SpyObj<Router>;

  const mockBooks: Book[] = [
    {
      id: 1,
      title: '1984',
      author: 'George Orwell',
      description: 'Dystopian novel',
      genre: 'Fiction',
      year: 1949,
      price: 15,
      imageUrl: ''
    }
  ];

  beforeEach(async () => {
    mockBookService = jasmine.createSpyObj('BookService', ['getBooks', 'deleteBook']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [BookListComponent],
      providers: [
        { provide: BookService, useValue: mockBookService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load books on init', () => {
    mockBookService.getBooks.and.returnValue(of(mockBooks));
    component.ngOnInit();
    expect(mockBookService.getBooks).toHaveBeenCalled();
    expect(component.books).toEqual(mockBooks);
    expect(component.isLoading).toBeFalse();
  });

  it('should navigate to add book page on onAdd()', () => {
    component.onAdd();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/books/add']);
  });

  it('should navigate to edit book page on onEdit()', () => {
    const book = mockBooks[0];
    component.onEdit(book);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/books/edit', book.id]);
  });

  it('should call deleteBook and reload books on delete', () => {
    spyOn(window, 'confirm').and.returnValue(true); // simulate user confirming
    mockBookService.deleteBook.and.returnValue(of(void 0));
    mockBookService.getBooks.and.returnValue(of([])); // for reload

    component.onDelete(1);

    expect(mockBookService.deleteBook).toHaveBeenCalledWith(1);
    expect(mockBookService.getBooks).toHaveBeenCalled();
  });

  it('should not delete book if user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    component.onDelete(1);
    expect(mockBookService.deleteBook).not.toHaveBeenCalled();
  });
});
