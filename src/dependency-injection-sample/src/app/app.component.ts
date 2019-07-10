import { Component, Optional, Inject } from '@angular/core';
import { BASE_URL, CURRENT_DATE } from './models/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    @Inject(BASE_URL) public baseUrl: string, 
    @Inject(CURRENT_DATE) public curDate: string){}
}

