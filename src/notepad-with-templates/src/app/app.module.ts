import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StringSelectorComponent } from './components/string-selector/string-selector.component';
import { OptionDirective } from './directives/option.directive';

@NgModule({
  declarations: [
    AppComponent,
    StringSelectorComponent,
    OptionDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
