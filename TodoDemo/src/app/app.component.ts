import {Component, OnInit} from '@angular/core';
import {Todo} from "./Models/todo.interface";
import {TodoService} from "./todo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todos: Todo[];

  constructor(public todoService: TodoService) { }

  ngOnInit() {
    this.loadTodos();
  }

  onTodoSaved(todo: Todo) {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.GetTodos().then(todos => this.todos = todos);
  }

}
