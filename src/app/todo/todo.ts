import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  tasks: Task[] = [
    { text: 'Купить молоко', completed: false },
    { text: 'Сделать лабу', completed: false },
    { text: 'Погулять', completed: false }
  ];
  newTask: string = '';
  maxLength: number = 40;

  get activeTasks(): Task[] {
    return this.tasks.filter(task => !task.completed);
  }

  get completedTasks(): Task[] {
    return this.tasks.filter(task => task.completed).slice(-3);
  }

  addTask() {
    if (this.newTask.trim() && this.newTask.length <= this.maxLength) {
      this.tasks.push({ text: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  toggleTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}