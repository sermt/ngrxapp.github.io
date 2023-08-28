import { createAction, props } from '@ngrx/store';

export const add = createAction('[Todo] Add Todo', props<{ text: string }>());
export const toggle = createAction(
  '[Todo] Toggle Todo',
  props<{ id: number }>()
);
export const toggleAll = createAction(
  '[Todo] ToggleAll Todo',
  props<{ completed: boolean }>()
);
export const edit = createAction(
  '[Todo] Edit Todo',
  props<{ id: number; text: string }>()
);
export const remove = createAction(
  '[Todo] Remove Todo',
  props<{ id: number }>()
);export const removeAllCompleted = createAction(
  '[Todo] Remove All Completed Todo');
