import { BaseModel } from './base.model';
import { DocumentType } from './enums/document-type.enum';
import { Patient } from './patient.model';
import { Doctor } from './doctor.model';

export interface PatientDocument extends BaseModel {
  patientId: number;
  patient: Patient;
  doctorId: number;
  doctor: Doctor;
  documentType: DocumentType;
  fileName: string;
  fileUrl: string;
  fileSizeBytes: number;
  contentType?: string;
  uploadedAtUtc: Date;
  notes?: string;
}
