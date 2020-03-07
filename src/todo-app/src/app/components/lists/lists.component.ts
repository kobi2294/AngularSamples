import { StateService } from './../../core/services/state.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists$: Observable<TodoList[]>;

  constructor(
    private state: StateService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.lists$ = this.state.getAllLists();
  }

  navigateToList(id: number) {
    this.router.navigate(['lists', id]);
  }

  navigateToNew() {
    this.router.navigate(['lists', -1, 'edit']);
  }

}
