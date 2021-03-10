import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = 'Minhas Tarefas';

  constructor() {
   this.todos.push(new Todo());
   this.todos.push('Ir ao super mercado');
   this.todos.push('Cortar o Cabelo');
  }


}
