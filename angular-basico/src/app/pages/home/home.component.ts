import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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

  newTaskContron = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required
    ]
  });
  

  addTask() {
    if (this.newTaskContron.valid) {
      const value = this.newTaskContron.value;
      this.addTaskHandler(value);
      this.newTaskContron.setValue('');
    }
  }

  addTaskHandler(title: string) {
    const newTask = {
      id: Date.now(),
      name: title,
      completed: false
    }

    if (newTask.name && newTask.name.trim() !== '') 
      this.tasks.update((tasks) => [...tasks, newTask]);
    else 
      alert('El nombre de la tarea no puede estar vacío o repetido');
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