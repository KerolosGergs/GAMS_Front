import { BaseModel } from './base.model';
import { DoseIntervalHours } from './enums/dose-interval-hours.enum';
import { MedicationPlan } from './medication-plan.model';

export interface MedicationItem extends BaseModel {
  medicationPlanId: number;
  medicationPlan: MedicationPlan;
  name: string;
  activeIngredient?: string;
  strength?: string;
  imageUrl: string;
  interval: DoseIntervalHours;
  dosePerIntake: string;
  notes?: string;
  // Computed property
  get dosesPerDay(): number;
}
