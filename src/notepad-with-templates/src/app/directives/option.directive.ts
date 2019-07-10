import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appOption]'
})
export class OptionDirective {

  constructor(public template: TemplateRef<any>) { 
    console.log(template);
  }

}
