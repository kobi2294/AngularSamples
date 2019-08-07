import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsListComponent } from './components/shows-list/shows-list.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';


@NgModule({
  declarations: [ShowsListComponent, ShowDetailsComponent],
  imports: [
    CommonModule,
    ShowsRoutingModule
  ], 
  exports: [ShowsListComponent]
})
export class ShowsModule { }
