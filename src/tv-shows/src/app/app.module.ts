import { ShowsListComponent } from './shows/components/shows-list/shows-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShowsModule } from './shows/shows.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CoreModule, 
    HttpClientModule, 
    ShowsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
