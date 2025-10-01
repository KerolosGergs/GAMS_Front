import { UserType } from './enums/user-type.enum';

export interface AppUser {
  id: string;
  userName: string;
  email: string;
  userType: UserType;
  isActive: boolean;
  createdAtUtc: Date;
  createdBy?: string;
  isDeleted: boolean;
  // Optionally add more IdentityUser fields as needed
}
