import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { ShowsListComponent } from './components/shows-list/shows-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'shows', component: ShowsListComponent}, 
  {path: 'shows/:mispar', component: ShowDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowsRoutingModule { }
