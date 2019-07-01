import { Component, OnInit, Input, ContentChild, TemplateRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-string-selector',
  templateUrl: './string-selector.component.html',
  styleUrls: ['./string-selector.component.css']
})
export class StringSelectorComponent {
  @Input() options: string[] = [];

  @Input() selected: string = '';

  @ContentChild(TemplateRef, {static: false})
  template: TemplateRef<any>;

  @Output() selection = new EventEmitter<string>();

  onSelection(value: string) {
    this.selection.emit(value);
  }
}
