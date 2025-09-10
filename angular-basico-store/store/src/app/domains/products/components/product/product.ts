import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '../../../shared/componentes/counter/models/product.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  @Input({required: true}) product!: ProductModel;

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    console.log('click form child');
    this.addToCart.emit('este es un msg dese el hijo');
  }
}