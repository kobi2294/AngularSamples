import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorsListComponent } from './components/colors-list/colors-list.component';
import { ColorsRoutingModule } from './colors-routing.module';
import { NewColorComponent } from './components/new-color/new-color.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorViewerComponent } from './components/color-viewer/color-viewer.component';
import { ColorsHomeComponent } from './components/colors-home/colors-home.component';

@NgModule({
  declarations: [ColorsListComponent, NewColorComponent, ColorViewerComponent, ColorsHomeComponent],
  imports: [
    CommonModule,
    ColorsRoutingModule, 
    FormsModule, ReactiveFormsModule
  ], 
  exports: [ColorsListComponent, NewColorComponent]
})
export class ColorsModule { }
