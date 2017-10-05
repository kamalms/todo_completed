import { TodoDetail } from './todo-detail.model';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {Todo} from './todo';

import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoDataService {

   // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for todo's
  todos: Todo[] = [];

  //todoDetail = new EventEmitter<TodoDetail[]>();

  constructor(  private api: ApiService) {
  }

  // Simulate POST /todos
  addTodo(todo: TodoDetail) : Observable<TodoDetail>{
    // if (!todo.id) {
    //   todo.id = ++this.lastId;
    // }
    // this.todos.push(todo);
    // return this;

    console.log("testing", todo);
  return   this.api.createTodo(todo);
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number) {
    // this.todos = this.todos
    //   .filter(todo => todo.id !== id);
    // return this;
    return this.api.deleteTodoById(id);
  }

  

  // Simulate GET /todos
  // getAllTodos(): Todo[] {
  //   return this.todos;
  // }

   getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }


  // Simulate GET /todos/:id
  // getTodoById(id: number): Todo {
  //   return this.todos
  //     .filter(todo => todo.id === id)
  //     .pop();
  // }


  // Simulate GET /todos/:id
  getTodoById(todoId: number): Observable<TodoDetail> {

  //  let newee =   this.api.getTodoById(todoId);
  //   return this.todoDetail.emit(newee);

    return this.api.getTodoById(todoId);
  }

  // Toggle todo complete
  // toggleTodoComplete(todo: Todo){
  //   let updatedTodo = this.updateTodoById(todo.id, {
  //     complete: !todo.complete
  //   });
  //   return updatedTodo;
  // }

  // Simulate PUT /todos/:id
  updateTodoById(todo: TodoDetail): Observable<TodoDetail>  {
    // let todo = this.getTodoById(id);
    // if (!todo) {
    //   return null;
    // }
    // Object.assign(todo, values);
    // return todo;


    return this.api.updateTodo(todo);
  }

}
