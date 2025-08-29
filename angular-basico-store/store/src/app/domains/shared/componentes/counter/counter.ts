import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = "";

  constructor() {
    // no async
    // before render 
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during render 
    console.log("ngonchanges");
    console.log("-".repeat(10));
    console.log(changes);
    
  }
}
