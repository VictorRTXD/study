import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Counter } from "../../../shared/componentes/counter/counter";

@Component({
  selector: 'app-about',
  imports: [CommonModule, Counter],
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  duration = signal(1000);
  message = signal("hola");

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber)
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value)
  }
}