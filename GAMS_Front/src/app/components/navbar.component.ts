import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [RouterLink,RouterLinkActive],
  standalone: true
})
export class NavbarComponent {
  Router = inject(Router);
  patient = {
    name: 'John Doe',
    age: 32,
    gender: 'Male',
    id: 'P-1001'
  };
navItems = [
  { label: 'Home', route: '/home/home', icon: 'bi-house-door' },
  { label: 'Medical Repo', route: '/home/patient-medical-repo', icon: 'bi-folder2-open' },
  { label: 'Medication', route: '/home/patient-medication', icon: 'bi-capsule' },
  { label: 'Medical Tests', route: '/home/patient-medical-tests', icon: 'bi-file-earmark-medical' },
  { label: 'About Us', route: '/home/about', icon: 'bi-info-circle' },
  { label: 'Contact Us', route: '/home/contact', icon: 'bi-envelope' }
];

  showProfile = false;
  toggleProfile() { this.showProfile = !this.showProfile; }
  logout() { this.Router.navigate(['/login']); }
}
