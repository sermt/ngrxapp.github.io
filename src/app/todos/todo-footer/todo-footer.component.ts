import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { setFilter, validFilters } from 'src/app/filter/filter.actions';
import { removeAllCompleted } from '../store/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit , OnDestroy{
  storeSubs:Subscription;
  selected!: Observable<validFilters>;
  pending: number = 0;
  areCompleted: boolean = false;
  filters: validFilters[] = ['all', 'completed', 'active'];
  constructor(private store: Store<AppState>) {
    this.storeSubs=this.store.subscribe((state) => {
      this.areCompleted = state.todos.every((todo) => todo.completed);
      this.pending = state.todos.filter((todo) => !todo.completed).length;
    });
  }
  ngOnInit(): void {
    this.selected = this.store.select('filter');
  }

  onSetFilter(filter: validFilters): void {
    this.store.dispatch(setFilter({ filter }));
  }

  onClearCompleted(): void {
    this.store.dispatch(removeAllCompleted());
  }

  ngOnDestroy(): void {
    this.storeSubs.unsubscribe();
  }
}
