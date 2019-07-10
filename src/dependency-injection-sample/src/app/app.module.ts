import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LogService } from './services/log.service';
import { BASE_URL, CURRENT_DATE, getDate } from './models/app.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LogService, 
    {provide: BASE_URL, useValue: 'http://myapp.com/'}, 
    { provide: CURRENT_DATE, useFactory: getDate}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
