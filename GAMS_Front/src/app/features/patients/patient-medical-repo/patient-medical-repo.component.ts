import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-medical-repo',
  templateUrl: './patient-medical-repo.component.html',
  styleUrls: ['./patient-medical-repo.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PatientMedicalRepoComponent {
  reports = [
    { title: 'Blood Report', date: '2025-01-10', file: 'Blood_Report_2025-01-10.pdf' },
    { title: 'MRI Scan', date: '2025-02-05', file: 'MRI_Scan_2025-02-05.pdf' }
  ];
}
