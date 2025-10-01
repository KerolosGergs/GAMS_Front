export interface BaseModel {
  id: number;
  createdAtUtc: Date;
  updatedAtUtc?: Date | null;
  deletedAtUtc?: Date | null;
  isDeleted: boolean;
}
