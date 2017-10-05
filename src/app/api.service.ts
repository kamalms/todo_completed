
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response } from '@angular/http';
import { Todo } from './todo';
import { TodoDetail } from './todo-detail.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

   constructor(
    private http: Http
  ) {
  }

  public getAllTodos(): Observable<Todo[]> {
  return this.http
    .get(API_URL + '/users')
    .map(response => {
     // console.log(response);
      const todos = response.json();

       console.log('json objects' , todos);

      return todos.map((todo) => new Todo(todo));
    })
    .catch(this.handleError);
}


  //Simulate GET /todos/:id
  // getTodoById(todoId: number): Observable<Todo> {
   


  //    return this.http
  //   .get(API_URL + '/todos/?userId' + todoId)
  //   .map(response => {
  //    // console.log(response);
  //     const todos = response.json();

  //      console.log('json objects by user id' , todos);

  //     return todos.map((todo) => new Todo(todo));
  //   })
  //   .catch(this.handleError);
  // }

//   public getTodoById(todoId: number): Observable<TodoDetail> {
//   return this.http
//     .get(API_URL + '/todos?userId=' + todoId)
//     .map(response => {
//      // return new TodoDetail(response.json());
//      return response.json();
//     })
//     .catch(this.handleError);
// }

 getTodoById(todoId: number): Observable<TodoDetail> {
   return this.http
   .get(API_URL + '/todos?userId=' + todoId)
      .map(
        (response: Response) => {
          const recipes: TodoDetail[] = response.json();
         
          return recipes;
        }
      )
      .catch(this.handleError);
      // .subscribe(
      //   (recipes: Recipe[]) => {
      //     this.recipeService.setRecipes(recipes);
      //   }
      // );
  }

  public updateTodo(todo: TodoDetail): Observable<TodoDetail> {

    console.log("great learning", todo);
  return this.http
    .put(API_URL + '/todos/' + todo.id, todo)
    .map(
      (response :Response)=> {

     // return new TodoDetail(response.json());
      const tododetail: TodoDetail[] = response.json();
         
          return tododetail;

    }
    )
    .catch(this.handleError);
}


  public deleteTodoById(todoId: number): Observable<null> {
  return this.http
    .delete(API_URL + '/todos/' + todoId)
    .map(response => null)
    .catch(this.handleError);
}

  public createTodo(todo: TodoDetail): Observable<TodoDetail> {

    console.log("create in api ts", todo);
  return this.http
    .post(API_URL + '/todos'  , todo)
    .map(response => {
      return new Todo(response.json());
    })
    .catch(this.handleError);
}


  private handleError (error: Response | any) {
  console.error('ApiService::handleError', error);
  return Observable.throw(error);
}
}
