import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss']
})
export class PatientProfileComponent {
  profile = {
    name: 'John Doe',
    age: 32,
    gender: 'Male',
    contact: 'john.doe@email.com',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg'
  };
}
