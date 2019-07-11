import { CanLeavePageGuard } from './../guards/can-leave-page.guard';
import { ColorsHomeComponent } from './components/colors-home/colors-home.component';
import { NewColorComponent } from './components/new-color/new-color.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorsListComponent } from './components/colors-list/colors-list.component';
import { ColorViewerComponent } from './components/color-viewer/color-viewer.component';

const routes: Routes = [
  {path: 'colors', component: ColorsHomeComponent, 
    children: [
      {path: 'new', component: NewColorComponent,
            canDeactivate: [CanLeavePageGuard]}, 
      {path: '', component: ColorsListComponent, 
        children: [
          {path: ':id', component: ColorViewerComponent}
        ]}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorsRoutingModule { }
