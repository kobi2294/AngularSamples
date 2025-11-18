import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'd1-sample-form', pathMatch: 'full' },
    { path: 'd1-sample-form', loadComponent: () => import('./pages/d1-basic-form/d1-basic-form')},
    { path: 'd2-validation', loadComponent: () => import('./pages/d2-validation/d2-validation')}
];
