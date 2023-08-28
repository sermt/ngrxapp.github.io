import { Component } from '@angular/core';
import { Todo } from '../models/todo.model';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { validFilters } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos: Observable<Todo[]>;
  filter: Observable<validFilters>;
  constructor(private store: Store<AppState>) {
    this.todos = this.store.select('todos');
    this.filter = this.store.select('filter');
  }
}
