import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientFacadeService } from 'src/app/modules/patient/pages/patient-page/patient-facade.service';
import type { Visit } from 'src/app/core/models/visit';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-visit-details-page',
  templateUrl: './visit-details-page.component.html',
  styleUrls: ['./visit-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisitDetailsPageComponent {
  visitDetails$: Observable<Visit> | null;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private patientFacade: PatientFacadeService
  ) {
    this.visitDetails$ = null;
    this.route.params.subscribe((params) => {
      this.visitDetails$ = this.patientFacade.getVisitDetails(params['?id']);
    });
  }

  onRegisterClick(visitId: number) {
    this.patientFacade
      .registerVisit(visitId)
      .subscribe(() => this.router.navigate(['/profile']));
  }
}
