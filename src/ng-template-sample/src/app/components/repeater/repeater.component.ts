import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-repeater',
  templateUrl: './repeater.component.html',
  styleUrls: ['./repeater.component.css']
})
export class RepeaterComponent implements OnInit {
  @Input() data: string[];

  @Input() template: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
