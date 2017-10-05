import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent   {
  //todo: Todo;
  id: number;
  @Input() todo: Todo;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor( private route: ActivatedRoute,
              private router: Router) {
  }
  // ngOnInit() {
  //   this.route.params
  //     .subscribe(
  //       (params: Params) => {
  //         this.id = +params['id'];
  //         console.log("get user id", this.id);
  //         //this.recipe = this.recipeService.getRecipe(this.id);
  //       }
  //     );
  // }

  toggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}