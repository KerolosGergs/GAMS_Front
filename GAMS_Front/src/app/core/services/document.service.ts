// import { Injectable } from '@angular/core';
// import { ApiService } from './api.service';
// import { PatientDocument } from '../models/patient-document.model';
// import { Observable } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class DocumentService {
//   private endpoint = 'documents';

//   constructor(private api: ApiService) {}

//   getAll(): Observable<PatientDocument[]> {
//     return this.api.get<PatientDocument[]>(this.endpoint);
//   }

//   getById(id: string): Observable<PatientDocument> {
//     return this.api.get<PatientDocument>(`${this.endpoint}/${id}`);
//   }

//   create(document: PatientDocument): Observable<PatientDocument> {
//     return this.api.post<PatientDocument>(this.endpoint, document);
//   }

//   update(id: string, document: PatientDocument): Observable<PatientDocument> {
//     return this.api.put<PatientDocument>(`${this.endpoint}/${id}`, document);
//   }

//   delete(id: string): Observable<void> {
//     return this.api.delete<void>(`${this.endpoint}/${id}`);
//   }
// }
