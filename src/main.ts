import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, Routes, withComponentInputBinding } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material Imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// Root Component
import { AppComponent } from './app/app.component';

// Components for routes
import { LoginComponent } from './app/auth/login/login.component';
import { RegisterComponent } from './app/auth/register/register.component';
import { HospitalListComponent } from './app/hospitals/hospital-list/hospital-list.component';
import { HospitalDetailComponent } from './app/hospitals/hospital-detail/hospital-detail.component';
import { HospitalFormComponent } from './app/hospitals/hospital-form/hospital-form.component';

// Define routes
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'hospitals', component: HospitalListComponent },
  { path: 'hospitals/detail/:id', component: HospitalDetailComponent },
  { path: 'hospitals/add', component: HospitalFormComponent },
  { path: 'hospitals/edit/:id', component: HospitalFormComponent },
];

// Bootstrap application
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(
      BrowserAnimationsModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule
    )
  ],
}).catch(err => console.error(err));


