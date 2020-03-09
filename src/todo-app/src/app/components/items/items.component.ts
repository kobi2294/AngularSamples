import { StateService } from './../../core/services/state.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/core/models/todi-item.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items$: Observable<TodoItem[]>

  constructor(
    private state: StateService
  ) { }

  ngOnInit(): void {
    this.items$ = this.state.getAllItems().pipe(
      map(items => items.filter(i => !i.isCompleted))
    );
  }

  async complete(itemId) {
    await this.state.markAsCompleted(itemId);
  }

}
