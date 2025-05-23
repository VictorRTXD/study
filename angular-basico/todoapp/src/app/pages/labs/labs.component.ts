import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  saludo = 'hola';
  tasks = [
    'tarea1',
    'tarea2',
    'tarea3',
  ]
  private privado = "esto no lo vera el html"
}
