import { AppUser } from './app-user.model';
import { BaseModel } from './base.model';
import { Doctor } from './doctor.model';
import { PatientDocument } from './patient-document.model';
import { MedicationPlan } from './medication-plan.model';

export interface Patient extends BaseModel {
  appUserId: string;
  appUser: AppUser;
  doctorId: number;
  doctor: Doctor;
  mrn?: string;
  documents: PatientDocument[];
  medicationPlans: MedicationPlan[];
}
