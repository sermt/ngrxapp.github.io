import {  createReducer, on } from '@ngrx/store';
import { add, edit, remove, removeAllCompleted, toggle, toggleAll } from './todo.actions';
import { Todo } from '../models/todo.model';

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  on(add, (state, { text }) => [...state, new Todo(text)]),
  on(toggle, (state, { id }) =>
    state.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  ),
  on(toggleAll, (state, { completed }) =>
    state.map((todo) => ({ ...todo, completed }))
  ),
  on(remove, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(removeAllCompleted, (state) => state.filter((todo) => !todo.completed)),
  on(edit, (state, { id, text }) =>
    state.map((todo) => (todo.id === id ? { ...todo, title: text } : todo))
  )
);
