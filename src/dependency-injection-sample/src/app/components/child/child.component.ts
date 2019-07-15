import { ParentComponent } from './../parent/parent.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  constructor(public parent: ParentComponent) {
  }
}
