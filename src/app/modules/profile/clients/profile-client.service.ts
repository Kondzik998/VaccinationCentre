import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from 'src/app/core/models/user-details';
import { UserProfile } from 'src/app/core/models/user-profile';
import { Visit } from 'src/app/core/models/visit';

@Injectable({
  providedIn: 'root',
})
export class ProfileClientService {
  constructor(private httpClient: HttpClient) {}

  public getProfile(): Observable<UserProfile> {
    return this.httpClient.get<UserProfile>('api/user/profile');
  }

  public put(data: UserDetails) {
    return this.httpClient.put('api/user/profile', { ...data, id: 0 });
  }

  public getVisits(): Observable<Visit[]> {
    return this.httpClient.get<Visit[]>(
      'api/user/visits/vaccination-dates/myvisits'
    );
  }

  public getVisitDetailsById(id: number): Observable<Visit> {
    return this.httpClient.get<Visit>(`/api/admin/visits/${id}`);
  }

  public cancelVisit(id: number) {
    return this.httpClient.put(`api/user/profile/cancel/${id}`, id);
  }
}
