import { Component, Input, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-repeater',
  templateUrl: './repeater.component.html',
  styleUrls: ['./repeater.component.css']
})
export class RepeaterComponent {
  @Input() data: string[];

  @ContentChild(TemplateRef, {static: false}) 
  template: TemplateRef<any>;
}
