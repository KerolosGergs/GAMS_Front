import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '',pathMatch: 'full', redirectTo: 'login'},
    {
        path: 'login',
        loadComponent: () => import('./features/auth/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home-page/home-page').then(m => m.HomePage),
        children: [
            {   path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)},
            {   path: 'about',   loadComponent: () => import('./pages/about-us/about-us.component').then(m => m.AboutUsComponent)},
            {   path: 'contact',   loadComponent: () => import('./pages/contact-us/contact-us.component').then(m => m.ContactUsComponent)},
            {   path: 'patient-medical-repo',loadComponent: () => import('./pages/patient-medical-repo/patient-medical-repo.component').then(m => m.PatientMedicalRepoPageComponent)},
            {   path: 'patient-medication',loadComponent: () => import('./pages/patient-medication/patient-medication.component').then(m => m.PatientMedicationPageComponent)},
            {   path: 'patient-medical-tests',loadComponent: () => import('./pages/patient-medical-tests/patient-medical-tests.component').then(m => m.PatientMedicalTestsPageComponent)},
            {   path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
    },
    {path: '**', redirectTo: 'login' }


];



