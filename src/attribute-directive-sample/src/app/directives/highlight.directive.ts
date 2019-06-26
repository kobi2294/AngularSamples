import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  constructor(private elem: ElementRef) {}

  ngOnInit(): void {
    this.elem.nativeElement.style.backgroundColor = 'yellow';
  }
}


