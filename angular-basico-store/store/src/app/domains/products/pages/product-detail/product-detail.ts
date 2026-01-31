import { CommonModule } from '@angular/common';
import { Component, inject, Input, input, signal } from '@angular/core';
import { ProductModel } from '@shared/componentes/counter/models/product.model';
import { ProductService } from '@shared/services/product.service';
import { Cart } from '@shared/services/cart';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
  standalone: true,
})
export default class ProductDetail {
  @Input() id?: string;
  product = signal<ProductModel | null>(null);
  cover = signal("")

  private productService = inject(ProductService);
  private cartService = inject(Cart)
  
  ngOnInit() {
    if (this.id) {
      this.productService.getProduct(this.id)
      .subscribe({
        next: (product) => {
          this.product.set(product);
          if (product.images.length > 0 ) {
            this.cover.set(product.images[0])
          }
        }
      })
    }
  }

  changeCover(newImage: string) {
    this.cover.set(newImage)
  }

  addToCart() {
    const product = this.product();
    if (product) {
      this.cartService.addToCart(product)
    }
  }
}