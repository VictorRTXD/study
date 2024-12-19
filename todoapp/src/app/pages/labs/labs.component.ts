import { Component } from '@angular/core';
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
  name = "victor";
  age = 21;
  bStatus = true;
  img = "chrome://branding/content/about-logo@2x.png";
  person = {
    name: "victor",
    age: 21,
  }

  clickHandler = () => alert("hola putos");
  changeHandler = (event: Event) => console.log(event);
}