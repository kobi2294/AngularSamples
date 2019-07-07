import { AddTodoAction } from './../../store/actions/todos-data.action';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private store: Store<AppState>) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      title: [''],
      work: [false],
      health: [false],
      payment: [false],
      completed: [false]
    });
  }

  save() {
    let item = <Todo>this.form.value;    
    this.store.dispatch(new AddTodoAction(item));
    this.initForm();
  }
}
