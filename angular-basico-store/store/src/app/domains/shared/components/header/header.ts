import { Component, inject, Input, signal, SimpleChange, SimpleChanges } from '@angular/core';
import { ProductModel } from '../../componentes/counter/models/product.model';
import { CommonModule } from '@angular/common';
import { Cart } from '../../services/cart';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  hideSideMenu = signal(true);
  private cartService = inject(Cart)
  cart = this.cartService.cart;
  total = this.cartService.total;


  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }
}
