import { VaccinationManufacture } from '../enums/vaccination-manufacture';
import { VaccineDose } from '../enums/vaccine-dose';

export interface Vaccine
  extends Readonly<{
    id: number;
    manufacturer: VaccinationManufacture;
    expirationDate: string;
    name: string;
    vaccineDose: VaccineDose;
  }> {}
