import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import WaveSurfer from 'wavesurfer.js'

@Component({
  selector: 'app-wave-audio',
  imports: [CommonModule],
  templateUrl: './wave-audio.html',
  styleUrl: './wave-audio.css',
  standalone: true,
})
export class WaveAudio {
  @Input({required: true}) audioUrl!: string;
  @ViewChild('wave') container!: ElementRef

  ngAfterViewInit() {
    WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement()
    })
  }
}
