import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'hola';
  tasks = ["instalar angular", "crear proyecto", "crear componentes"];
  tasks2 = signal(["instalar angular", "crear proyecto", "crear componentes"]);
  name = "victor";
  age = 21;
  bStatus = true;
  img = "chrome://branding/content/about-logo@2x.png";
  person = signal({
    name: "victor",
    age: 21,
  });
  secondName = signal("eduardo");

  clickHandler = () => alert("hola putos");
  changeHandler = (event: Event) => console.log(event);
  keyDownHandler = (event: KeyboardEvent) => {
    let input = event?.target as HTMLInputElement;
    console.log(input.value);
  }
  signalHandler = (event: KeyboardEvent) => {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.secondName.set(newValue); //forma para cambiar los valores signal
  }
  changeAge(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {...prevState, age: parseInt(newValue, 10)}
    })
  }
  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState, 
        name: newValue 
      }
    });
  }
}