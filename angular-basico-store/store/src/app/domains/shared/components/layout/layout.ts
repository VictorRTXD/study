import { Component } from '@angular/core';
import { Header } from '../header/header';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, Header, RouterModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  standalone: true,
})
export class Layout {

}
