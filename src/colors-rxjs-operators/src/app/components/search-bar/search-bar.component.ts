import { StateService } from './../../services/state.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {  
  isBusy$: Observable<boolean>;

  constructor(private state: StateService) { }

  ngOnInit() {
    this.isBusy$ = this.state.isBusy;
  }

  async setSearch(value: string) {
    await this.state.setFilter(value);
  }
}

