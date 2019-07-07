import { NgModule } from '@angular/core';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule,
  MatCheckboxModule, MatSlideToggleModule, MatGridListModule,
} from '@angular/material';

import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';


const modules = [
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule,
  MatCheckboxModule, MatSlideToggleModule, MatGridListModule, LayoutModule, DragDropModule
];

@NgModule({
  imports: modules, 
  exports: modules
})
export class AppMaterialModule { }
