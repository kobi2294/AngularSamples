import { NgModule } from '@angular/core';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatGridListModule,
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

const modules = [
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule,
  MatCheckboxModule, MatSlideToggleModule, MatGridListModule, LayoutModule
];

@NgModule({
  declarations: [],
  imports: modules, 
  exports: modules
})
export class AppMaterialModule { }
