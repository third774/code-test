import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TodoService} from "../todo.service";
import {Todo} from "../Models/todo.interface";

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit, OnChanges {

  createTodoForm: FormGroup;
  @Output() todoSaved = new EventEmitter<Todo>();
  @Input() todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.initializeForm();
  }

  ngOnChanges() {
    this.initializeForm(this.todo);
  }

  initializeForm(todo?: Todo) {
    if (todo) {
      this.createTodoForm = new FormGroup({
        title: new FormControl(todo.title, Validators.required),
        description: new FormControl(todo.description, Validators.required),
        complete: new FormControl(todo.complete),
        id: new FormControl(todo.id)
      });
    } else {
      this.createTodoForm = new FormGroup({
        title: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        complete: new FormControl(false)
      });
    }

  }

  onSaveTodo() {
    if (this.createTodoForm.valid) {
      const todo = this.createTodoForm.value;
      if (todo.id) {
        this.todoService.UpdateTodo(todo).then(updatedTodo => {
          this.initializeForm();
          this.todoSaved.emit(updatedTodo);
        });
      } else {
        this.todoService.CreateTodo(todo).then(createdTodo => {
          this.initializeForm();
          this.todoSaved.emit(createdTodo);
        });
      }
    }
  }

}
