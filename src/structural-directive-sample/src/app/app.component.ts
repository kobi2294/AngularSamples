import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ['Sunday', 'Monday', 'Tuesday'];

  resetItems() {
    this.items = ['Red', 'Green', 'Blue'];
    console.log(this.items);
  }

  addItem() {
    this.items.push('Yellow');
    console.log(this.items);
  }

  moveItem() {
    this.items = [...this.items, this.items[0]].slice(1);
    console.log(this.items);
  }



  isShowingMessage = false;
  toggle() {
    this.isShowingMessage = !this.isShowingMessage;
  }
}
