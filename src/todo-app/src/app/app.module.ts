import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListsComponent } from './components/lists/lists.component';
import { ListViewerComponent } from './components/list-viewer/list-viewer.component';
import { ListEditorComponent } from './components/list-editor/list-editor.component';
import { ItemsComponent } from './components/items/items.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TodoItemPresenterComponent } from './components/todo-item-presenter/todo-item-presenter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListsComponent,
    ListViewerComponent,
    ListEditorComponent,
    ItemsComponent,
    NotFoundComponent,
    TodoItemPresenterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
