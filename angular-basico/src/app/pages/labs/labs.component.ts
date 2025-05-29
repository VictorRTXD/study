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
  private privado = "esto no lo vera el html";
  variableInput = "este es mi valor";
  disabled = false;
  img = "https://th.bing.com/th/id/OIP.7wm4zT59Oep7kXxMC_HgLgHaE8?rs=1&pid=ImgDetMain";

  person = {
    name : 'victor',
    
  }

  clickHandler() {
    alert('hola mundo');
  }

  changeHandler(event: Event) {
    console.log(event);
  }
}