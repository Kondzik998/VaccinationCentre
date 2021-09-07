import { Gender } from '../enums/gender';

export interface UserDetails
  extends Readonly<{
    id: number;
    dateOfBirth: string;
    firstName: string;
    lastName: string;
    otherNames: string;
    contactPhone: string;
    country: string;
    city: string;
    street: string;
    gender: Gender;
    isVaccinated: boolean;
  }> {}
