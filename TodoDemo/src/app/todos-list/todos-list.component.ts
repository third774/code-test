import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../Models/todo.interface";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  @Input() todos: Todo[];
  @Output() todoDeleted: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onSelectTodo(todo) {
    this.todoService.selectedTodo = todo;
  }

  handleTodoDelete(todo: Todo) {
    this.todoDeleted.emit(todo);
  }

}
