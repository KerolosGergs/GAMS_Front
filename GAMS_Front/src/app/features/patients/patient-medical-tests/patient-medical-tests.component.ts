import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-medical-tests',
  templateUrl: './patient-medical-tests.component.html',
  styleUrls: ['./patient-medical-tests.component.scss']
})
export class PatientMedicalTestsComponent {
  tests = [
    { name: 'X-Ray Chest', date: '2025-03-01', pdf: 'xray.pdf' },
    { name: 'Blood Sugar Test', date: '2025-04-12', pdf: 'bloodsugar.pdf' }
  ];
}
