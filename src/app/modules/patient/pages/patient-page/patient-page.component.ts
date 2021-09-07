import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import type { VisitFiltersState } from 'src/app/core/dtos/visit-filter-state';
import type { VisitFiltersQueryParams } from 'src/app/core/models/visit-filters-query-params';
import { PatientFacadeService } from './patient-facade.service';
import type { PageEvent } from '@angular/material/paginator';
import type { Visit } from 'src/app/core/models/visit';

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientPageComponent implements OnInit {
  filters: VisitFiltersState;
  visits$ = this.patientFacade.visits$;
  pageOptions: { pageIndex: number; pageSize: number };

  columnsData: { columns: (keyof Visit)[]; columnsNames: string[] } = {
    columns: ['visitDate', 'visitDateTime', 'facility', 'vaccine'],
    columnsNames: ['Date', 'Time', 'Facility', 'Vaccine'],
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private patientFacade: PatientFacadeService
  ) {
    this.pageOptions = { pageIndex: 0, pageSize: 10 };
    this.filters = {};
  }

  onVisitClick({ id: visitId }: Visit) {
    const visitUrl = `/patient/visit/${visitId}`;
    this.router.navigate([visitUrl]);
  }

  onFiltersChanged(filtersState: VisitFiltersState) {
    this.patientFacade.setQueryParams(filtersState);
  }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams: VisitFiltersQueryParams) => {
      const parsedParams = this.patientFacade.parseQueryParams(queryParams);
      this.filters = { ...parsedParams };
      this.patientFacade.loadVisits(this.pageOptions, this.filters);
    });
  }

  onPageOptionsChange(pageEvent: PageEvent) {
    this.pageOptions = pageEvent;
    this.patientFacade.loadVisits(this.pageOptions, this.filters);
  }
}
