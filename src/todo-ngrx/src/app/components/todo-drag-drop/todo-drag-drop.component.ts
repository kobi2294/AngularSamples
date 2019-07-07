import { MarkUncompletedAction } from './../../store/actions/todos-data.action';
import { filter, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { AppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { MarkCompletedAction } from 'src/app/store/actions/todos-data.action';

@Component({
  selector: 'app-todo-drag-drop',
  templateUrl: './todo-drag-drop.component.html',
  styleUrls: ['./todo-drag-drop.component.scss'],
})
export class TodoDragDropComponent implements OnInit {
  todo$: Observable<Todo[]>;
  done$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) { }
  ngOnInit() {
    this.todo$ = this.store.select(x => x.todosData.todos)
      .pipe(map(list => list.filter(x => !x.completed)));
    this.done$ = this.store.select(x => x.todosData.todos)
      .pipe(map(list => list.filter(x => x.completed)));
  }

  drop(event: CdkDragDrop<Todo[]>) {
    if (event.previousContainer !== event.container) {
      let item = event.previousContainer.data[event.previousIndex];

      if (!item.completed) {
        this.store.dispatch(new MarkCompletedAction(item));
      } else {
        this.store.dispatch(new MarkUncompletedAction(item));
      }
    }
  }
}
