import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PatientProfileComponent } from "../patient-profile/patient-profile.component";
import { PatientMedicalRepoComponent } from "../patient-medical-repo/patient-medical-repo.component";
import { PatientMedicationComponent } from "../patient-medication/patient-medication.component";
import { PatientMedicalTestsComponent } from "../patient-medical-tests/patient-medical-tests.component";

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.scss'],
  imports: [CommonModule, PatientProfileComponent, PatientMedicalRepoComponent, PatientMedicationComponent, PatientMedicalTestsComponent]
})
export class PatientDashboardComponent {
  navItems = [
    { label: 'Profile', icon: 'bi-person', key: 'profile' },
    { label: 'Medical Repository', icon: 'bi-folder2-open', key: 'medical-repo' },
    { label: 'Medication', icon: 'bi-capsule', key: 'medication' },
    { label: 'Medical Tests & Rumors', icon: 'bi-file-earmark-medical', key: 'medical-tests' }
  ];
  selected = 'profile';

  select(key: string) {
    this.selected = key;
  }
}
