import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    tasks2 = signal(["instalar angular", "crear proyecto", "crear componentes"]);

    changeHandler(event: Event) {
      // const entrada = document.querySelector(".new-todo");
      // entrada?.setAttribute("value", "");
      const input = event.target as HTMLInputElement;
      const newTasks = input.value;
      // a diferencia del set que reinicia el valor, update lo actualiza
      this.tasks2.update((tasks2) => [...tasks2, newTasks]);
    }

    deleteTask(index: number) {
      this.tasks2.update((tasks2) => tasks2.filter((task, position) => position != index));
    }
}
