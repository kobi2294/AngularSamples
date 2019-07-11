import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwatchesRoutingModule } from './swatches-routing.module';
import { SwatchesListComponent } from './components/swatches-list/swatches-list.component';

@NgModule({
  declarations: [SwatchesListComponent],
  imports: [
    CommonModule,
    SwatchesRoutingModule
  ]
})
export class SwatchesModule { }
