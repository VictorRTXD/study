import { Component, signal, computed, effect, Injector, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task } from '../../models/task.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  completedTasks = 0;

  tasks = signal<Task[]>([])
  filter = signal<"all" | "pending" | "completed">("all")
  tasksFiltered = computed(() => {
    const filter = this.filter();
    const tasks = this.tasks();

    if (filter === 'pending') {
      return tasks.filter(tasks => !tasks.completed)
    } else if (filter === 'completed') {
      return tasks.filter(tasks => tasks.completed)
    } else {
      return tasks
    }
  })

  newTaskContron = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required
    ]
  });

  injector = inject(Injector)

  ngOnInit() {
    const storage = localStorage.getItem('tasks');
    if (storage) {
      const tasks = JSON.parse(storage);
      this.tasks.set(tasks);
    }
    this.trackTasks();
  }

  trackTasks() {
    effect(() => {
          const tasks = this.tasks();
          localStorage.setItem('tasks', JSON.stringify(tasks))
    }, {injector: this.injector})
  }

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

  editTask(index: number) {
    this.tasks.update(prevState => {
      return prevState.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            editing: true
          }
        }
        return {
          ...task,
          editing: false
        }
      })
    })
  }

  saveEditTask(index: number, event: Event) {
    const input = event.target as HTMLInputElement;

    this.tasks.update(prevState => {
      return prevState.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            name: input.value,
            editing: false
          }
        }
        return task
      })
    })
  }

  changeFilter(filter: "all" | "pending" | "completed") {
    this.filter.set(filter);
  }
}