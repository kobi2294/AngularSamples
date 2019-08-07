import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { ShowsListComponent } from './components/shows-list/shows-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowsHomeComponent } from './components/shows-home/shows-home.component';
import { ShowEditorComponent } from './components/show-editor/show-editor.component';


const routes: Routes = [
  {path: '', component: ShowsHomeComponent, children: [
    {path: '', component: ShowsListComponent}, 
    {path: ':mispar', component: ShowDetailsComponent}, 
    {path: ':mispar/edit', component: ShowEditorComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowsRoutingModule { }
