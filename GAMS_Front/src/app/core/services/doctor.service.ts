import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Doctor } from '../models/doctor.model';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DoctorService {
  private endpoint = 'doctors';

  constructor(private api: ApiService) {}

  getAll(): Observable<Doctor[]> {
    return this.api.get<Doctor[]>(this.endpoint).pipe(
      map((event: any) => event.body as Doctor[])
    );
  }

  getById(id: string): Observable<Doctor> {
    return this.api.get<Doctor>(`${this.endpoint}/${id}`).pipe(
      map((event: any) => event.body as Doctor)
    );
  }

  create(doctor: Doctor): Observable<Doctor> {
    return this.api.post<Doctor>(this.endpoint, doctor).pipe(
        map((event: any) => event.body as Doctor)
    );
  }

  update(id: string, doctor: Doctor): Observable<Doctor> {
    return this.api.put<Doctor>(`${this.endpoint}/${id}`, doctor).pipe(
      map((event: any) => event.body as Doctor)
    );
  }

  delete(id: string): Observable<void> {
    return this.api.delete<void>(`${this.endpoint}/${id}`).pipe(
      map(() => void 0)
    );
  }
}
