import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../components/product/product';
import { ProductModel } from '@shared/componentes/counter/models/product.model';
import { Cart } from '@shared/services/cart';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category';
import { Category } from '@shared/componentes/counter/models/category.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, Product, RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export default class List {
  products = signal<ProductModel[]>([]);
  categories = signal<Category[]>([]);
  private cartService = inject(Cart)
  private categoryService = inject(CategoryService)
  private productService = inject(ProductService);
  @Input() category_id?: string;

  ngOnInit() {
    this.getCategories()
  }

  ngOnChanges(changes: SimpleChanges){
      this.getProducts()
  }

  addToCart(product: ProductModel) {
    this.cartService.addToCart(product);
  }

  private getProducts() {
    this.productService.getProducts(this.category_id)
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
