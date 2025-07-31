import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../components/product/product';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, Product],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  fromChild(event: string) {
    console.log("este es el padre");
    console.log(event);
    
  }
}
