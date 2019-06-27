import { Directive, TemplateRef, ViewContainerRef, Input, 
  IterableDiffers, ChangeDetectorRef, IterableDiffer, OnInit, DoCheck, ViewRef } from '@angular/core';

@Directive({
  selector: '[appFor]'
})
export class ForDirective implements OnInit, DoCheck {
  private _items: any[];
  _difference: IterableDiffer<any>;

  @Input('appForOf') set items(value: any[]) {
    this._items = value;
  }
  ngOnInit() {
    this._difference = this.differs.find(this._items).create();
  }  
  ngDoCheck() {
    let changes = this._difference.diff(this._items);
    if (changes) {
      this.viewContainer.clear();
      for (const item of this._items) {
        const context = {$implicit: item};
        this.viewContainer.createEmbeddedView(this.templateRef, context);
      }
    }
  }
  constructor(
    private templateRef: TemplateRef<any>, 
    private viewContainer: ViewContainerRef, 
    private differs: IterableDiffers, 
    ) { }
}
