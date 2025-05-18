import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component'; // Adjust path if needed

@NgModule({
  imports: [
    CommonModule,
    HeaderComponent 
  ],
  exports: [
    HeaderComponent 
  ]
})
export class SharedModule {}
