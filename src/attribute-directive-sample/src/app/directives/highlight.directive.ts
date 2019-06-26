import { Directive, Input, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') color: string;

  @Output() triggered = new EventEmitter<string>();

  @HostBinding('style.background-color') myBackgroundColor: string;

  private wasTriggered = false;

  @HostListener('mouseenter') onMouseOver() {
    let color = this.color || 'yellow';
    this.myBackgroundColor = color;
    if (!this.wasTriggered) {
      this.wasTriggered = true;
      this.triggered.emit(color);
    }
  }

  @HostListener('mouseleave') onMouseOut() {
    this.myBackgroundColor = '';
  }
}


