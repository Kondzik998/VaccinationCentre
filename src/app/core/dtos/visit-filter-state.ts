import { VaccinationManufacture } from '../enums/vaccination-manufacture';
import { VaccineDose } from '../enums/vaccine-dose';
import { Pageable } from '../models/pageable';

export interface VisitFiltersState
  extends Partial<{
    fromDate: Date;
    toDate: Date;
    manufacturer: VaccinationManufacture;
    dose: VaccineDose;
    city: string;
  }> {}

export interface MediacalStaffVisitFilterState extends VisitFiltersState {
  patientName?: string;
}

export interface VisitDto extends Pageable, VisitFiltersState {}

export interface MediacalStaffVisitDto
  extends Pageable,
    MediacalStaffVisitFilterState {}
