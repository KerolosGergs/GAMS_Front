import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-medication',
  templateUrl: './patient-medication.component.html',
  styleUrls: ['./patient-medication.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PatientMedicationComponent {
  medications = [
    { name: 'Aspirin', img: 'https://cdn-icons-png.flaticon.com/512/2921/2921822.png', dosage: '100mg', times: ['Morning', 'Evening'] },
    { name: 'Vitamin D', img: 'https://cdn-icons-png.flaticon.com/512/2921/2921823.png', dosage: '5000 IU', times: ['Morning'] }
  ];
}
