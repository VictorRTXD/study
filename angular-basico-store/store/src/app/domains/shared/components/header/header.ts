import { Component, Input, signal, SimpleChange, SimpleChanges } from '@angular/core';
import { ProductModel } from '../../componentes/counter/models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  hideSideMenu = signal(true);
  @Input({required: true}) cart: ProductModel[] = []
  total = signal(0);

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

  ngOnChanges(changes: SimpleChanges) {
    const cart = changes['cart'];
    if (cart) {
      this.total.set(this.calcTotal())
    }
  }

  calcTotal() {
    return this.cart.reduce((total, product) => total + product.price, 0)
  }
}
