import type { Facility } from './facility';
import type { UserDetails } from './user-details';
import type { Vaccine } from './vaccine';

export interface Visit {
  id: number;
  visitDate: string;
  visitDateTime: string;
  vaccine: Vaccine;
  facility: Facility;
  tookPlace?: boolean;
  userDetails?: UserDetails;
}
