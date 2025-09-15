import { Component, inject, Input, signal, SimpleChange, SimpleChanges } from '@angular/core';
import { ProductModel } from '../../componentes/counter/models/product.model';
import { CommonModule } from '@angular/common';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  hideSideMenu = signal(true);
  private cartService = inject(Cart)
  cart = this.cartService.cart;
  total = this.cartService.to;


  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }
}
