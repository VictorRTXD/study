import { computed, Injectable, signal } from '@angular/core';
import { ProductModel } from '../componentes/counter/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class Cart {
  cart = signal<ProductModel[]>([]);
  
  total = computed(() => {
    const cart = this.cart();
    // La función reduce() recorre un arreglo y acumula un resultado usando una función que tú defines.
    return cart.reduce((total, product) => total + product.price, 0)
  })

  constructor() {}

  addToCart(product: ProductModel) {
    this.cart.update(state => [...state, product])
  }
}
