import { ShowsModule } from './shows/shows.module';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShowsListComponent } from './shows/components/shows-list/shows-list.component';
import { ShowDetailsComponent } from './shows/components/show-details/show-details.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent}, 
  {path: 'about', component: AboutComponent}, 
  {path: 'shows', loadChildren: 
    () => import('./shows/shows.module')
    .then(mod => mod.ShowsModule)},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
