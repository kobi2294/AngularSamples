import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.todos$ = this.store.select(x => x.todosData.todos);
  }

}
