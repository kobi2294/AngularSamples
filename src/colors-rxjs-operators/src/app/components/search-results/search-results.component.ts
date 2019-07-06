import { StateService } from './../../services/state.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorModel } from 'src/app/models/colors.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchResults$: Observable<ColorModel[]>

  constructor(private state: StateService) { }

  ngOnInit() {
    this.searchResults$ = this.state.searchResults;
  }
}

