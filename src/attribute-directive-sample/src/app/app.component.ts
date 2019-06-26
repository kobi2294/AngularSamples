import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'attribute-directive-sample';

  onHighlightTrigger(color: string) {
    console.log('highlight was triggered in color ' + color);
  }
}
