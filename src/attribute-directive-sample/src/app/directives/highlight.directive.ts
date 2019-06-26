import { Directive, Input, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') color: string;

  @HostBinding('style.background-color') myBackgroundColor: string;

  @HostListener('mouseenter') onMouseOver() {
    let color = this.color || 'yellow';
    this.myBackgroundColor = color;
  }

  @HostListener('mouseleave') onMouseOut() {
    this.myBackgroundColor = '';
  }
}


