import { BaseModel } from './base.model';
import { Patient } from './patient.model';
import { Doctor } from './doctor.model';
import { PlanStatus } from './enums/plan-status.enum';
import { MedicationItem } from './medication-item.model';

export interface MedicationPlan extends BaseModel {
  patientId: number;
  patient: Patient;
  doctorId: number;
  doctor: Doctor;
  status: PlanStatus;
  startDateUtc: Date;
  notes?: string;
  items: MedicationItem[];
}
