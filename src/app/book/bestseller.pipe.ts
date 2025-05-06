import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bestseller',
  standalone: true 
})
export class BestsellerPipe implements PipeTransform {
  transform(title: string): string {
    const bestsellers = ['THE GREAT GATSBY', '1984', 'TO KILL A MOCKINGBIRD'];
    return bestsellers.includes(title.toUpperCase()) ? `${title} ⭐` : title;
  }
}