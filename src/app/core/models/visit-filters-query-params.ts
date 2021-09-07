import { VisitFiltersState } from '../dtos/visit-filter-state';

export type VisitFiltersQueryParams = Partial<
  Record<keyof VisitFiltersState, string>
>;
