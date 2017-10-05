
import { Response } from '@angular/http';

import { TodoDataService } from './../todo-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Todo } from '../todo';
import { TodoDetail } from '../todo-detail.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-tododetail',
  templateUrl: './tododetail.component.html',
  styleUrls: ['./tododetail.component.css']
})
export class TododetailComponent implements OnInit {
   id: number;
  // todosdetail: TodoDetail[];
    //loopthedetail :Array<TodoDetail>;

    todosdetail: TodoDetail ;
  constructor( private route: ActivatedRoute,
              private router: Router,  private todoDataService: TodoDataService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
         
          //this.recipe = this.recipeService.getRecipe(this.id);
        },
        err=>{

        },
        ()=>{
            console.log("conpelted");
        }
      );

      if(this.id){
         this.todoDataService
      .getTodoById(this.id)
      .subscribe(
        (todosdetail) => {
           //this.loopthedetail.push(todosdetail);
           //this.todosdetail = this.loopthedetail;
          //  console.log("get user id", todosdetail);
           this.todosdetail = todosdetail;
        // this.todosdetail = todosdetail;
        }
      );

      
      }


  }

  onSubmit(form: NgForm){

    

    const value = form.value;
    
     
      let newrequest = {
"userId": this.id,
"id": 0,
"title": value.name,
"completed": false
}
 
      
   
    this.todoDataService.addTodo(newrequest)
    .subscribe((createtodo)=>{
      console.log("total data", createtodo);
    });
    

  }
  yescheckit(todoItem){

   
     this.todoDataService
      .updateTodoById(todoItem)
      .subscribe(
        (todosdetail) => {
        console.log("response data", todosdetail);
          // if(this.todosdetail){
          //     console.log("before data", this.todosdetail);
          // }
          // this.todosdetail = todosdetail;
        }
      );
  }

  OnDelete(todoItem){
     console.log("OnDelete", todoItem);
     this.todoDataService
     .deleteTodoById(todoItem.id)
     .subscribe((data)=>{

      console.log("response data", data);
     })
  }

}
