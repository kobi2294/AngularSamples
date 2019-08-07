import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsListComponent } from './components/shows-list/shows-list.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { ShowsHomeComponent } from './components/shows-home/shows-home.component';
import { ShowEditorComponent } from './components/show-editor/show-editor.component';


@NgModule({
  declarations: [
    ShowsListComponent, 
    ShowDetailsComponent, ShowsHomeComponent, ShowEditorComponent
  ],
  imports: [
    CommonModule,
    ShowsRoutingModule
  ], 
  exports: []
})
export class ShowsModule { }
