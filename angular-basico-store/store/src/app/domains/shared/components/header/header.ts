import { Component, Input, signal } from '@angular/core';
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

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }
}
