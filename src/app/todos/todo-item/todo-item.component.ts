import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { edit, remove, toggle } from '../store/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('txtEditInput') txtEditInput!: ElementRef;

  editing: boolean = false;

  checkBoxInput!: FormControl;
  txtInput!: FormControl;

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.checkBoxInput = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.title, Validators.required);
  }

  onEdit(): void {
    this.editing = true;
    this.txtInput.setValue(this.todo.title);
    this.txtEditInput.nativeElement.select();
  }

  onBlur(): void {
    this.editing = false;
    if (this.txtInput.invalid) {
      return;
    }
    if (this.txtInput.value === this.todo.title) {
      return;
    }
    this.store.dispatch(edit({ id: this.todo.id, text: this.txtInput.value }));
  }

  onDelete(): void {
    this.store.dispatch(remove({ id: this.todo.id }));
  }

  onToggle(): void {
    this.store.dispatch(toggle({ id: this.todo.id }));
  }
}
