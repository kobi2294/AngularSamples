import { Directive, ElementRef, Renderer2, OnInit, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() color: string = 'yellow';

  @HostBinding('style.background-color') myBackgroundColor: string;

  @HostListener('mouseenter') onMouseOver() {
    this.myBackgroundColor = this.color;
  }

  @HostListener('mouseleave') onMouseOut() {
    this.myBackgroundColor = '';
  }
}


