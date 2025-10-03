import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-medical-tests-page',
  templateUrl: './patient-medical-tests.component.html',
  styleUrls: ['./patient-medical-tests.component.scss'],
  standalone: true
})
export class PatientMedicalTestsPageComponent {
  tests = [
    { name: 'Blood Test', date: '2025-01-10', pdf: 'Blood Test.pdf' },
    { name: 'MRI Scan', date: '2025-02-05', pdf: 'MRI.pdf' }
  ];
}
