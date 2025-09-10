import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../components/product/product';
import { ProductModel } from '../../../shared/componentes/counter/models/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, Product],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  products = signal<ProductModel[]>([]);

  constructor() {
    const initProducts : ProductModel[] = [
      {
        id: Date.now(),
        title: "producto 1",
        price: 100,
        image: "https://picsum.photos/640/640?r=1",
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: "producto 2",
        price: 200,
        image: "https://picsum.photos/640/640?r=2",
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: "producto 3",
        price: 300,
        image: "https://picsum.photos/640/640?r=3",
        creationAt: new Date().toISOString()
      }
    ];
    this.products.set(initProducts)
  }

  fromChild(event: string) {
    console.log("este es el padre");
    console.log(event);
  }
}
