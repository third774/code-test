import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosListItemComponent } from './todos-list-item/todos-list-item.component';
import {TodoService} from "./todo.service";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TodoDetailComponent} from "./todo-detail/todo-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    TodosListComponent,
    TodosListItemComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
