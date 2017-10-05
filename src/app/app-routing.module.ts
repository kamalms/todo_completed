import { TododetailComponent } from './tododetail/tododetail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodosComponent } from './todos/todos.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    component: TodosComponent,
    // children:[
    //     { path: ':id', component: TododetailComponent },
    // ]
  },
  
     { path: 'todos/:id', component: TododetailComponent },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
