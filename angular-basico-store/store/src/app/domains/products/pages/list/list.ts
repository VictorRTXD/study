import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../components/product/product';
import { ProductModel } from '../../../shared/componentes/counter/models/product.model';
import { Header } from '../../../shared/components/header/header';
import { Cart } from '../../../shared/services/cart';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, Product, Header],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  products = signal<ProductModel[]>([]);
  private cartService = inject(Cart)


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

  addToCart(product: ProductModel) {
    this.cartService.addToCart(product);
  }
}
