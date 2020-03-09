import { CoreValidators } from './../../core/validations/core-validators';
import { StateService } from './../../core/services/state.service';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { TodoItem } from 'src/app/core/models/todi-item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-viewer',
  templateUrl: './list-viewer.component.html',
  styleUrls: ['./list-viewer.component.css']
})
export class ListViewerComponent implements OnInit {
  listId$: Observable<number>;
  list$: Observable<TodoList>;
  items$: Observable<TodoItem[]>;

  isConfirmingDelete: boolean = false;
  newLine = new FormControl('', CoreValidators.counters(10, 3));

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

  confirmDelete() {
    this.isConfirmingDelete = true;
  }

  cancelConfirmDelete() {
    this.isConfirmingDelete = false;
  }

  async deleteList() {
    let id = Number(this.route.snapshot.params['id']);
    await this.state.deleteList(id);
    this.router.navigate(['lists']);
  }

  async editList() {
    let id = Number(this.route.snapshot.params['id']);
    this.router.navigate(['lists', id, 'edit']);
  }

  async createNewList() {
    this.router.navigate(['lists', -1, 'edit']);
  }

  async markAsCompleted(itemId: number) {
    await this.state.markAsCompleted(itemId);
  }

  async addItem() {
    let listId = Number(this.route.snapshot.params['id']);
    await this.state.addItem(listId, this.newLine.value);
    this.newLine.reset();
  }


}
