import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Todo} from "./Models/todo.interface";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Injectable()
export class TodoService {

  public selectedTodo: Todo;

  public todoUpdated$: Observable<Todo>;
  private todoUpdatedSubject: Subject<Todo>;

  constructor(private http: Http) {
    this.todoUpdatedSubject = new Subject<Todo>();
    this.todoUpdated$ = this.todoUpdatedSubject.asObservable();
  }

  public CreateTodo(todo: Todo): Promise<Todo> {
    return this.http.post('/api/Todos', todo)
      .map(res => res.json())
      .toPromise()
      .then(createdTodo => {
        this.todoUpdatedSubject.next(createdTodo);
        return createdTodo;
      });
  }

  public UpdateTodo(todo: Todo): Promise<Todo> {
    return this.http.put('/api/Todos', todo)
      .map(res => res.json())
      .toPromise()
      .then(updatedTodo => {
        this.todoUpdatedSubject.next(updatedTodo);
        return updatedTodo;
      });
  }

  public GetTodos(): Promise<Todo[]> {
    return this.http.get('/api/Todos')
      .map(res => res.json())
      .toPromise();
  }

  public DeleteTodo(todo: Todo): Promise<Todo> {
    return this.http.delete(`/api/Todos/${todo.id}`)
      .map(res => res.json())
      .toPromise();
  }

}
