import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toggleAll } from '../store/todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent {
  constructor(private store: Store<AppState>) {}
  completed = false;

  onToggleAll(): void {
    this.completed = !this.completed;
    this.store.dispatch(toggleAll({ completed: this.completed }));
  }
}
