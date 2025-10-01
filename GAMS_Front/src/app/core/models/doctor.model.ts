import { AppUser } from './app-user.model';
import { BaseModel } from './base.model';
import { Patient } from './patient.model';

export interface Doctor extends BaseModel {
  appUserId: string;
  appUser: AppUser;
  fullName?: string;
  patients: Patient[];
}
