import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        loadComponent: () => import('./features/auth/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'patient-dashboard',
        loadComponent: () => import('./features/patients/patient-dashboard/patient-dashboard.component').then(m => m.PatientDashboardComponent)
    }
];
     


