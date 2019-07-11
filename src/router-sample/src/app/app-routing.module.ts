import { InfoComponent } from './components/info/info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'colors', pathMatch: 'full' },
  { path: 'swatches', 
    loadChildren: () => import('./swatches/swatches.module')
                        .then(mod => mod.SwatchesModule)}, 
  {
    path: 'happy', component: InfoComponent,
    outlet: 'info', data: { msg: 'We are Happy' }
  },
  {
    path: 'content', component: InfoComponent,
    outlet: 'info', data: { msg: 'We are Content Today' }
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
