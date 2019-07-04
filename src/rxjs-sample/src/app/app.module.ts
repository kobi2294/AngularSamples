import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterViewerComponent } from './components/counter-viewer/counter-viewer.component';
import { CounterModifierComponent } from './components/counter-modifier/counter-modifier.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterViewerComponent,
    CounterModifierComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
