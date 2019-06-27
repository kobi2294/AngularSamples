import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ctx1 = {$implicit: 'And how are you', header: 'Hello', footer: 'World'};
  ctx2 = {$implicit: 'day of week', header: 'Sunday', footer: 'Monday'};
}
