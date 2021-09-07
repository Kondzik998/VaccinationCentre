import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserProfile } from 'src/app/core/models/user-profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  public user$ = new BehaviorSubject(<UserProfile>{});

  public initialize(user: UserProfile): void {
    this.user$.next(user);
  }
}
