import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks2 = signal<Task[]>([
    {
      id: Date.now(),
      title: "Crear proyecto",
      completed: false
    },
    {
      id: Date.now(),
      title: "play xbox",
      completed: false
    },
    {
      id: Date.now(),
      title: "learn how to program with angular",
      completed: false
    }
  ]);

  newTaskCtrl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
    ]
  });

  addTask(title: string) {
    const newTasks = {
      id: Date.now(),
      title,
      completed: false
    }
    this.tasks2.update((tasks2) => [...tasks2, newTasks]);
  }

  changeHandler() {
    if (this.newTaskCtrl.valid) {
      const value = this.newTaskCtrl.value;
      this.addTask(value);
      this.newTaskCtrl.setValue('');
    }
  }

  deleteTask(index: number) {
    this.tasks2.update((tasks2) => tasks2.filter((task, position) => position != index));
  }

  updateTask = (index: number) => {
    this.tasks2.update((tasks2) => {
      return tasks2.map((tasks2, position) => {
        if (position === index) {
          return {
            ...tasks2, completed: !tasks2.completed
          }
        }
        return tasks2;
      })
    })
  }
}
