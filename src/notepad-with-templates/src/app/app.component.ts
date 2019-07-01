import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = ['red', 'blue', 'green', 'magenta', 'gray', 'brown'];
  sizes = ['12px', '16px', '24px', '36px', '48px', '60px'];
  fonts = ['Arial', 'Tahoma', 'Segoe UI', 'David', 'Verdana', 'Consolas'];

  selectedColor = this.colors[0];
  selectedSize = this.sizes[0];
  selectedFont = this.fonts[0];

  selectColor(value: string) {
    this.selectedColor = value;
  }

  selectSize(value: string) {
    this.selectedSize = value;
  }

  selectFont(value: string) {
    this.selectedFont = value;
  }
}
