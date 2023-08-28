import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { validFilters } from '../filter/filter.actions';

@Pipe({
  name: 'filterTodo',
})
export class FilterPipe implements PipeTransform {
  transform(
    todos: Todo[] | null = [],
    filter: validFilters | null = 'all'
  ): Todo[] {
    if (todos === null || filter === null) return [];
    switch (filter) {
      case 'all':
        return todos;
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'active':
        return todos.filter((todo) => !todo.completed);
    }
  }
}
