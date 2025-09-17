import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../components/product/product';
import { ProductModel } from '@sharedcomponentes/counter/models/product.model';
import { Header } from '@shared/components/header/header';
import { Cart } from '@sharedservices/cart';
import { ProductService } from '@sharedservices/product.service';

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
  private productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProducts()
    .subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {
        
      }
    })
  }

  addToCart(product: ProductModel) {
    this.cartService.addToCart(product);
  }
}
