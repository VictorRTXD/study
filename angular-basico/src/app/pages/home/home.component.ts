import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  completedTasks = 0;

  tasks = signal<Task[]>([
    {
      id: Date.now(), 
      name: 'tarea1', 
      completed: false
    },
    {
      id: Date.now(), 
      name: 'tarea2', 
      completed: false
    },
    {
      id: Date.now(), 
      name: 'tarea3', 
      completed: false
    },
  ])

  addTask(event: Event) {
    const input = event.target as HTMLInputElement
    this.addTaskHandler(input.value)
  }

  addTaskHandler(title: string) {
    const newTask = {
      id: Date.now(),
      name: title,
      completed: false
    }

    this.tasks.update((tasks) => [...tasks, newTask]);
  }
  
  deleteTask(index: number) {
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index));
  }

  updateTask(index: number) {
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          if (task.completed == true)
            this.completedTasks++;
          else
            this.completedTasks--;

          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      });
    });
  }

  labelItem() {
    return (this.tasks().length + this.completedTasks) === 1 ? "item" : "items";
  }
}