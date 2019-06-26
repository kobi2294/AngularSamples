import { Directive, ElementRef, Renderer2, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() color: string = 'yellow';

  constructor(
    private renderer: Renderer2, 
    private elem: ElementRef) {}

    @HostListener('mouseenter') onMouseOver() {
      this.renderer.setStyle(this.elem.nativeElement, 
        'background-color', this.color);  
    }

    @HostListener('mouseleave') onMouseOut() {
      this.renderer.setStyle(this.elem.nativeElement, 
        'background-color', '');  
    }

}


