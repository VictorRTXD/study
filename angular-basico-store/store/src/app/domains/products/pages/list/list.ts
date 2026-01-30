import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../components/product/product';
import { ProductModel } from '@shared/componentes/counter/models/product.model';
import { Cart } from '@shared/services/cart';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category';
import { Category } from '@shared/componentes/counter/models/category.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, Product, ],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  products = signal<ProductModel[]>([]);
  categories = signal<Category[]>([]);
  private cartService = inject(Cart)
  private categoryService = inject(CategoryService)
  private productService = inject(ProductService);

  ngOnInit() {
    this.getProducts()
    this.getCategories()
  }

  addToCart(product: ProductModel) {
    this.cartService.addToCart(product);
  }

  private getProducts() {
    this.productService.getProducts()
    .subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {
        
      }
    })
  }

  private getCategories() {
    this.categoryService.getAll()
    .subscribe({
      next: (data) => {
        this.categories.set(data);
      },
      error: () => {
        
      }
    })
  }
}
