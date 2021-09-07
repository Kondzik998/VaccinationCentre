import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/core/models/user-details';
import { Visit } from 'src/app/core/models/visit';
import { ProfileFacadeService } from './profile-facade.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageComponent implements OnInit {
  public user$ = this.profileFacade.user$;
  public visits$ = this.profileFacade.visits$;

  columnsData: { columns: (keyof Visit)[]; columnsNames: string[] } = {
    columns: ['visitDate', 'visitDateTime', 'facility', 'vaccine', 'tookPlace'],
    columnsNames: ['Date', 'Time', 'Facility', 'Vaccine', 'Took place'],
  };

  constructor(
    private profileFacade: ProfileFacadeService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.profileFacade.loadProfile();
  }

  public onProfileEdit(user: UserDetails): void {
    this.profileFacade.editProfile(user);
  }

  public onVisitClick({ id: visitId }: Visit) {
    const visitUrl = `/profile/visit/${visitId}`;
    this.router.navigate([visitUrl]);
  }
}
