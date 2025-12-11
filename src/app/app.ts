import { Component } from '@angular/core';
import { Todo } from './todo/todo';

@Component({
  selector: 'app-root',
  imports: [Todo],
  template: `
    <div style="max-width: 600px; margin: 50px auto; padding: 20px;">
      <h1>Мой ToDo список</h1>
      <app-todo></app-todo>
    </div>
  `,
  styles: []
})
export class App {
  title = 'todo-app';
}