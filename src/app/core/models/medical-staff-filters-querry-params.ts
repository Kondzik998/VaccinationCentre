import { MediacalStaffVisitFilterState } from '../dtos/visit-filter-state';

export type MedicalStaffQueryParams = Partial<
  Record<keyof MediacalStaffVisitFilterState, string>
>;
