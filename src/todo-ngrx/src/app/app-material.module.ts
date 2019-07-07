import { NgModule } from '@angular/core';
import {
    MatToolbarModule, MatButtonModule, MatSidenavModule,
    MatIconModule, MatListModule, MatInputModule, MatSelectModule,
    MatCardModule, MatCheckboxModule, MatSlideToggleModule, MatGridListModule
} from '@angular/material';

const modules = [
    MatToolbarModule, MatToolbarModule, MatButtonModule, MatSidenavModule,
    MatIconModule, MatListModule, MatInputModule, MatSelectModule,
    MatCardModule, MatCheckboxModule, MatSlideToggleModule, MatGridListModule
];

@NgModule({
    imports: modules, 
    exports: modules
})
export class AppMaterialModule { }

