import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from 'src/app/core/models/user-details';
import { Visit } from 'src/app/core/models/visit';
import { ProfileClientService } from '../../clients/profile-client.service';
import { ProfileService } from '../../services/profile.service';
import { VisitService } from '../../services/visit.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileFacadeService {
  public user$ = this.profileService.user$;
  public visits$ = this.visitService.visits$;
  public visitDetails$ = this.visitService.visitDetails$;

  constructor(
    private profileService: ProfileService,
    private profileClient: ProfileClientService,
    private visitService: VisitService
  ) {}

  private loadProfileData(): void {
    this.profileClient.getProfile().subscribe((data) => {
      this.profileService.initialize(data);
    });
  }

  private loadVisitsData(): void {
    this.profileClient.getVisits().subscribe((data) => {
      this.visitService.setVisits(data);
    });
  }

  public loadProfile(): void {
    this.loadProfileData();
    this.loadVisitsData();
  }

  public editProfile(user: UserDetails): void {
    this.profileClient.put(user).subscribe((_) => {
      this.loadProfileData();
    });
  }

  public onVisitCancel(id: number): void {
    this.profileClient.cancelVisit(id).subscribe((_) => {
      this.loadVisitsData();
    });
  }

  public loadVisitDetails(id: number): void {
    this.profileClient.getVisitDetailsById(id).subscribe((visit) => {
      this.visitService.setVisitDetails(visit);
    });
  }
}
