import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {
  private hasView: boolean = false;

  @Input('appIf') set condition(value: boolean) {
    // if the value is true and we do not have an instance of the template
    // create an instance
    if (value && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!value && this.hasView) {
      // if the value is false, but we DO have an instance of the template - clear it
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  constructor(
    private templateRef: TemplateRef<any>, 
    private viewContainer: ViewContainerRef) { }
}
