import { Component, signal } from '@angular/core';

import { Counter } from "@shared/componentes/counter/counter";
import { WaveAudio } from '../../components/wave-audio/wave-audio';
import { HighlightDirective } from '@shared/directives/highlight';

@Component({
  selector: 'app-about',
  imports: [Counter, WaveAudio, HighlightDirective],
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export default class About {
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