import { UserRole } from '../enums/user-role';
import { UserDetails } from './user-details';

export interface UserProfile
  extends Partial<{
    applicationUserRole: UserRole;
    email: string;
    id: number;
    password: string;
    userDetailsDTO: UserDetails;
    username: string;
  }> {}
