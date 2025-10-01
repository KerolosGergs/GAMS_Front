// import { Injectable } from '@angular/core';
// import { ApiService } from './api.service';
// import { Patient } from '../models/patient.model';
// import { Observable } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class PatientService {
//   private endpoint = 'patients';

//   constructor(private api: ApiService) {}

//   getAll(): Observable<Patient[]> {
//     return this.api.get<Patient[]>(this.endpoint);
//   }

//   getById(id: string): Observable<Patient> {
//     return this.api.get<Patient>(`${this.endpoint}/${id}`);
//   }

//   create(patient: Patient): Observable<Patient> {
//     return this.api.post<Patient>(this.endpoint, patient);
//   }

//   update(id: string, patient: Patient): Observable<Patient> {
//     return this.api.put<Patient>(`${this.endpoint}/${id}`, patient);
//   }

//   delete(id: string): Observable<void> {
//     return this.api.delete<void>(`${this.endpoint}/${id}`);
//   }
// }
