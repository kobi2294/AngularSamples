import { DataService } from './../../../core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/core/models/show.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css']
})
export class ShowsListComponent implements OnInit {
  shows: Show[];
  
  constructor(
    private data: DataService, 
    private router: Router) { }

  async ngOnInit() {
    this.shows = await this.data.getAllShows();
  }

  select(index: number) {
    this.router.navigate(['shows', index+1]);    
  }

}
