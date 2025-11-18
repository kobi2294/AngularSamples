import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'd1-simple-form', pathMatch: 'full' },
    { path: 'd1-simple-form', title: 'Simple Form', loadComponent: () => import('./pages/d1-basic-form/d1-basic-form')},
    { path: 'd2-validation', title: 'Validation', loadComponent: () => import('./pages/d2-validation/d2-validation')}
];
