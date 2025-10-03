import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-medication-page',
  templateUrl: './patient-medication.component.html',
  styleUrls: ['./patient-medication.component.scss'],
  standalone: true
})
export class PatientMedicationPageComponent {
  medications = [
    { name: 'Aspirin', img: 'Asprine.jpg', dosage: '100mg', times: ['Morning', 'Evening'] },
    { name: 'Vitamin D', img: 'VitmenD3.jpg', dosage: '5000 IU', times: ['Morning'] }
  ];
}
