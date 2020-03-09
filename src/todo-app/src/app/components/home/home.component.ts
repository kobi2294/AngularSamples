import { StateService } from './../../core/services/state.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  today = Date.now();
  developer = 'Kobi Hari';
  application = 'Todos app';
  itemsCount$: Observable<number>;
  uncompletedCount$: Observable<number>;

  constructor(
    private state: StateService, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.itemsCount$ = this.state.getAllItems().pipe(
      map(items => items.length)
    );
    this.uncompletedCount$ = this.state.getAllItems().pipe(
      map(items => items.filter(i => !i.isCompleted).length)
    );
  }

  navigateToNew() {
    this.router.navigate(['lists', -1, 'edit']);
  }

}
