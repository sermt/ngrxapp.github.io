import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { add } from '../store/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent {
  txtInput: FormControl;

  constructor(private store:Store<AppState>) {
    this.txtInput = new FormControl('Hello', Validators.required);
  }

  onEnter() {
    if (this.txtInput.invalid) {
      return;
    }

    this.store.dispatch(add({ text: this.txtInput.value }));
  }
}
