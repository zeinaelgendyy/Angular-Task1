import { Pipe, PipeTransform } from '@angular/core';
/**
 * Adds a star emoji to book titles that are considered bestsellers.
 */
@Pipe({
  name: 'bestseller',
  standalone: true 
})
export class BestsellerPipe implements PipeTransform {
  /**
   * Transforms a book title by appending a star if it is a bestseller.
   * @param title - The original book title.
   * @returns The transformed title with a star if it's a bestseller.
   */
  transform(title: string): string {
    const bestsellers = ['THE GREAT GATSBY', '1984', 'TO KILL A MOCKINGBIRD'];
    return bestsellers.includes(title.toUpperCase()) ? `${title} ⭐` : title;
  }
}
