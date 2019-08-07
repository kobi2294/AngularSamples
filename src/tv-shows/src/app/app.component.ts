import { DataService } from './core/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private data: DataService) {}

  ngOnInit(): void {
  }

  async getSomeData() {
    let res = await this.data.getAllShows();
    console.log(res);
  }


  title = 'tv-shows';
}
