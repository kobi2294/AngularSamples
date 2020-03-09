import { StateService } from './../../core/services/state.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { TodoItem } from 'src/app/core/models/todi-item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-list-viewer',
  templateUrl: './list-viewer.component.html',
  styleUrls: ['./list-viewer.component.css']
})
export class ListViewerComponent implements OnInit {
  listId$: Observable<number>;
  list$: Observable<TodoList>;
  items$: Observable<TodoItem[]>;

  constructor(
    private state: StateService, 
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.listId$ = this.route.params.pipe(
      map(prms => Number(prms['id']))
    );

    this.list$ = this.listId$.pipe(
      switchMap(id => this.state.getTodoList(id))
    );

    this.items$ = this.listId$.pipe(
      switchMap(id => this.state.getItemsInList(id))
    )
  }

}
