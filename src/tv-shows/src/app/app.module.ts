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
import { ShowDetailsComponent } from './shows/components/show-details/show-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent, 
    ShowsListComponent, 
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CoreModule, 
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
