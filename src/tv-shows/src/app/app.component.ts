import { AuthenticationService } from './core/services/authentication.service';
import { DataService } from './core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(
    private data: DataService, 
    private auth: AuthenticationService
    ) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.auth.isLoggedIn;
  }

  async getSomeData() {
    let res = await this.data.getAllShows();
    console.log(res);
  }


  title = 'tv-shows';
}
