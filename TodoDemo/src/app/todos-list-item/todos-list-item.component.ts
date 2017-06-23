import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../Models/todo.interface";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todos-list-item',
  templateUrl: './todos-list-item.component.html',
  styleUrls: ['./todos-list-item.component.css']
})
export class TodosListItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() todoDeleted = new EventEmitter<Todo>();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onDelete() {
    if (this.todo && this.todoService.selectedTodo && this.todoService.selectedTodo.id === this.todo.id) {
      this.todoService.selectedTodo = null;
    }
    this.todoService.DeleteTodo(this.todo).then(deletedTodo => this.todoDeleted.emit(deletedTodo));
  }

}
