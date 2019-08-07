import { AuthenticationService } from './../../core/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.auth.isLoggedIn;
  }

  async login() {
    await this.auth.login();
  }

  async logout() {
    await this.auth.logout();
  }

}
