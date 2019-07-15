import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwatchesListComponent } from './components/swatches-list/swatches-list.component';

const routes: Routes = [
  {path: '', component: SwatchesListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwatchesRoutingModule { }
