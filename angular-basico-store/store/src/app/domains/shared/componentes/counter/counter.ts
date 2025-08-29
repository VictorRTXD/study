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
    // corre solo una vez
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during render 
    console.log("ngonchanges");
    console.log("-".repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration)
      console.log(duration.previousValue + ' ' + duration.currentValue);
      this.doSomething();
  }

  ngOnInit() {
    // after render
    // una vez
    // async, then, subs
    console.log('ngOninit');
    console.log('-'.repeat(10));
    console.log('duration ' + this.duration);
    console.log('message ' + this.message);
  }

  ngAfterViewInit() {
    // after render
    // hijos ya fueron pintados 
    console.log('ngafterviewinit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    console.log('muerto');
    console.log('-'.repeat(10));
  }

  doSomething() {
    console.log('change duration');
  }
}