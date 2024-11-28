import { Routes } from '@angular/router';
import { LoginComponent } from './/auth/login/login.component';
import { RegisterComponent } from './/auth/register/register.component';
import { HospitalListComponent } from './/hospitals/hospital-list/hospital-list.component';
import { HospitalDetailComponent } from './/hospitals/hospital-detail/hospital-detail.component';
import { HospitalFormComponent } from './hospitals/hospital-form/hospital-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('.//auth/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent) },
  { path: 'hospitals', loadComponent: () => import('.//hospitals/hospital-list/hospital-list.component').then(m => m.HospitalListComponent) },
  { path: 'hospitals/detail/:id', loadComponent: () => import('.//hospitals/hospital-detail/hospital-detail.component').then(m => m.HospitalDetailComponent) },
  { path: 'hospitals/add', loadComponent: () => import('./hospitals/hospital-form/hospital-form.component').then(m => m.HospitalFormComponent) },
  { path: 'hospitals/edit/:id', loadComponent: () => import('.//hospitals/hospital-form/hospital-form.component').then(m => m.HospitalFormComponent) }
];
