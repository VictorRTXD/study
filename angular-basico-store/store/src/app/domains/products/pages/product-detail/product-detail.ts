import { CommonModule } from '@angular/common';
import { Component, inject, Input, input, signal } from '@angular/core';
import { Product } from '@products/components/product/product';
import { ProductModel } from '@shared/componentes/counter/models/product.model';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
  standalone: true,
})
export class ProductDetail {
  @Input() id?: string;
  product = signal<ProductModel | null>(null);
  private productService = inject(ProductService);
  
  ngOnInit() {
    if (this.id) {
      this.productService.getProduct(this.id)
      .subscribe({
        next: (product) => {
          this.product.set(product)
        }
      })
    }
  }
}