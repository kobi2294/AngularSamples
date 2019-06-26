import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  constructor(
    private renderer: Renderer2, 
    private elem: ElementRef) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.elem.nativeElement, 
      'background-color', 'yellow');
  }
}


