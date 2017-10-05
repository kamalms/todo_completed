
import { Component, OnInit  } from '@angular/core';

import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   
})
export class AppComponent   {
  title = "app works!";

    todos: Todo[] = [];

 
  // newTodo: Todo = new Todo();
  
  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `TodoDataService`
  // and assign it to a property called `todoDataService`
  constructor(private todoDataService: TodoDataService) {
  }

   
  // addTodo() {
  //   this.todoDataService.addTodo(this.newTodo);
  //   this.newTodo = new Todo();
  // }


  // Add new method to handle event emitted by TodoListHeaderComponent
  

  // get todos() {
  //   return this.todoDataService.getAllTodos();
  // }

  

}
