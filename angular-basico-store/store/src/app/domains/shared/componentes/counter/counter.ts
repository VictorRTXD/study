import { Component, Input, signal, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-counter',
  imports: [],
  standalone: true,
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = "";
  counter = signal(0);
  counterRef :  number | undefined;

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
    this.counterRef = window.setInterval(() => {
      this.counter.update(statePrev => statePrev + 1)
      console.log("run interval");
    }, 1000)
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
    window.clearInterval(this.counterRef)
  }

  doSomething() {
    console.log('change duration');
  }
}