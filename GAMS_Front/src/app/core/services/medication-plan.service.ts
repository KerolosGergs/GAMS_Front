// import { Injectable } from '@angular/core';
// import { ApiService } from './api.service';
// import { MedicationPlan } from '../models/medication-plan.model';
// import { Observable } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class MedicationPlanService {
//   private endpoint = 'medication-plans';

//   constructor(private api: ApiService) {}

//   getAll(): Observable<MedicationPlan[]> {
//     return this.api.get<MedicationPlan[]>(this.endpoint);
//   }

//   getById(id: string): Observable<MedicationPlan> {
//     return this.api.get<MedicationPlan>(`${this.endpoint}/${id}`);
//   }

//   create(plan: MedicationPlan): Observable<MedicationPlan> {
//     return this.api.post<MedicationPlan>(this.endpoint, plan);
//   }

//   update(id: string, plan: MedicationPlan): Observable<MedicationPlan> {
//     return this.api.put<MedicationPlan>(`${this.endpoint}/${id}`, plan);
//   }

//   delete(id: string): Observable<void> {
//     return this.api.delete<void>(`${this.endpoint}/${id}`);
//   }
// }
