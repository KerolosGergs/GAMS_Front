import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-medical-repo-page',
  templateUrl: './patient-medical-repo.component.html',
  styleUrls: ['./patient-medical-repo.component.scss'],
  standalone: true
})
export class PatientMedicalRepoPageComponent {
  reports = [
    { title: 'Blood Report', date: '2025-01-10', file: 'MedRepo.pdf' },
    { title: 'MRI Scan', date: '2025-02-05', file: 'MRI.pdf' }
  ];
}
