import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tasks = signal([
    'tarea1',
    'tarea2',
    'tarea3',
  ])

  addTask(event: Event) {
    // como lo hice yo
    // const input = event.target as HTMLInputElement
    // this.tasks.set([...this.tasks(), input.value])
    const input = event.target as HTMLInputElement
    this.tasks.update((tasks) => [...tasks, input.value]);
  }
  
  deleteTask(index: number) {
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index));
  }
}