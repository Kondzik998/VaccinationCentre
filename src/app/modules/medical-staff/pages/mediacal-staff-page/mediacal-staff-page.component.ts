import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediacalStaffVisitFilterState } from 'src/app/core/dtos/visit-filter-state';
import { MedicalStaffFacadeService } from './medical-staff-facade.service';

@Component({
  selector: 'app-mediacal-staff-page',
  templateUrl: './mediacal-staff-page.component.html',
  styleUrls: ['./mediacal-staff-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediacalStaffPageComponent implements OnInit {
  filters!: MediacalStaffVisitFilterState;

  constructor(
    private route: ActivatedRoute,
    private medicalStaffFacade: MedicalStaffFacadeService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      const parsedParams =
        this.medicalStaffFacade.parseQueryParams(queryParams);
      this.filters = { ...parsedParams };
    });
  }

  public onFiltersChanged(filtersState: MediacalStaffVisitFilterState) {
    this.medicalStaffFacade.setQueryParams(filtersState);
  }
}
