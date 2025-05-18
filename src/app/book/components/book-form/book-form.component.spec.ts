import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookFormComponent } from './book-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { BookService } from '../../services/book.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('BookFormComponent', () => {
  let component: BookFormComponent;
  let fixture: ComponentFixture<BookFormComponent>;
  let bookServiceSpy: jasmine.SpyObj<BookService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    bookServiceSpy = jasmine.createSpyObj('BookService', ['createBook', 'updateBook', 'getBookById', 'deleteBook']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [BookFormComponent, ReactiveFormsModule],
      providers: [
        { provide: BookService, useValue: bookServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => null } } } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create form component', () => {
    expect(component).toBeTruthy();
  });

  it('should not submit if form is invalid', () => {
    spyOn(component, 'onSubmit').and.callThrough();
    component.form.setValue({
      title: '', author: '', genre: '', year: '', price: '', imageUrl: '', description: ''
    });
    component.onSubmit();
    expect(component.form.invalid).toBeTrue();
  });
});
