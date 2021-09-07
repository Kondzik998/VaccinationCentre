import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, map, filter } from 'rxjs/operators';
import { ProfileFacadeService } from '../profile-page/profile-facade.service';

@Component({
  templateUrl: './profile-visits-details-page.component.html',
  styleUrls: ['./profile-visits-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileVisitsDetailsPageComponent implements OnInit, OnDestroy {
  public visitDetails$ = this.profileFacade.visitDetails$;
  public isVisitCancelable$ = this.visitDetails$.pipe(
    map((visit) => this.isCancelable(visit.visitDate))
  );
  public visitDetailsIdSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profileFacade: ProfileFacadeService
  ) {}

  public ngOnInit() {
    this.visitDetailsIdSubscription = this.route.params
      .pipe(
        map((params) => params['?id'] as number),
        filter((id) => !!id),
        distinctUntilChanged()
      )
      .subscribe((id) => {
        this.profileFacade.loadVisitDetails(id);
      });
  }

  public ngOnDestroy() {
    this.visitDetailsIdSubscription.unsubscribe();
  }

  public isCancelable(visitDate: string) {
    return new Date(visitDate).getTime() > new Date().getTime();
  }

  public navigateToProfilePage() {
    this.router.navigate(['/profile']);
  }

  public onVisitCancel(id: number): void {
    this.profileFacade.onVisitCancel(id);
  }

  public onClickCancelButton(id: number): void {
    this.onVisitCancel(id);
    this.navigateToProfilePage();
  }
}
