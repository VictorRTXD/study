
import { Component, input, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  imports: [ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  saludo = 'hola';
  tasks = signal([
    'tarea1',
    'tarea2',
    'tarea3',
  ])
  private privado = "esto no lo vera el html";
  variableInput = "este es mi valor";
  disabled = false;
  img = "https://th.bing.com/th/id/OIP.7wm4zT59Oep7kXxMC_HgLgHaE8?rs=1&pid=ImgDetMain";

  person = {
    name : signal('victor'),
    age: 18,
  }

  colorCtrl = new FormControl()
  widthCtrl = new FormControl(50, { nonNullable: true })
  nameCtrl = new FormControl(50, { 
    nonNullable: true, 
    validators: [
      Validators.required, Validators.minLength(3)
    ]})

  constructor() {
    this.colorCtrl.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  clickHandler() {
    alert('hola mundo');
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newvalue = input.value;
    this.person.name.set(newvalue); // Actualiza la señal con el nuevo valor
    console.log(newvalue);
  }

  keydonwnHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}