import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MediacalStaffVisitFilterState } from 'src/app/core/dtos/visit-filter-state';
import { MedicalStaffQueryParams } from 'src/app/core/models/medical-staff-filters-querry-params';
import { QueryParamsParserService } from '../../../../core/services/query-params-parser.service';

@Injectable({
  providedIn: 'root',
})
export class MedicalStaffFacadeService {
  constructor(
    private router: Router,
    private queryParamsParser: QueryParamsParserService
  ) {}

  public getParsedQueries(
    data: MediacalStaffVisitFilterState
  ): MedicalStaffQueryParams {
    return this.queryParamsParser.getParsedQueries(data);
  }

  public parseQueryParams(
    data: MedicalStaffQueryParams
  ): MediacalStaffVisitFilterState {
    return this.queryParamsParser.parseQueryParams(data);
  }

  setQueryParams(filtersState: MediacalStaffVisitFilterState) {
    const parsedQueries = this.getParsedQueries(filtersState);
    this.router.navigate([], { queryParams: { ...parsedQueries } });
  }
}
