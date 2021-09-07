import { Injectable } from '@angular/core';
import type { VisitFiltersState } from 'src/app/core/dtos/visit-filter-state';
import type { VisitFiltersQueryParams } from 'src/app/core/models/visit-filters-query-params';
import { Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { QueryParamsParserService } from '../../../../core/services/query-params-parser.service';
import { VaccinationDatetesClientService } from '@patient/clients/vaccination-datetes-client-service';

@Injectable({
  providedIn: 'root',
})
export class PatientFacadeService {
  public visits$ = this.patientService.visits$;

  constructor(
    private router: Router,
    private patientService: PatientService,
    private vaccinationDatesClient: VaccinationDatetesClientService,
    private queryParamsParser: QueryParamsParserService
  ) {}

  public getParsedQueries(data: VisitFiltersState): VisitFiltersQueryParams {
    return this.queryParamsParser.getParsedQueries(data);
  }

  public parseQueryParams(data: VisitFiltersQueryParams): VisitFiltersState {
    return this.queryParamsParser.parseQueryParams(data);
  }

  setQueryParams(filtersState: VisitFiltersState) {
    const parsedQueries = this.getParsedQueries(filtersState);
    this.router.navigate([], { queryParams: { ...parsedQueries } });
  }

  loadVisits(
    pageOptions: { pageIndex: number; pageSize: number },
    filters: VisitFiltersState
  ) {
    const { pageIndex: page, pageSize: size } = pageOptions;
    return this.vaccinationDatesClient
      .get({ page, size }, this.getParsedQueries(filters))
      .subscribe(
        (visits) => {
          this.patientService.initialize(visits);
        },
        () => this.patientService.reset()
      );
  }

  getVisitDetails(visitId: number) {
    return this.vaccinationDatesClient.getById(visitId);
  }

  registerVisit(visitId: number) {
    return this.vaccinationDatesClient.registerById(visitId);
  }
}
