import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Visit } from 'src/app/core/models/visit';

@Injectable({
  providedIn: 'root',
})
export class VisitService {
  public visits$ = new BehaviorSubject<Visit[]>([]);
  public visitDetails$ = new BehaviorSubject<Visit>(null);

  public setVisits(visit: Visit[]): void {
    this.visits$.next(visit);
  }

  public setVisitDetails(visit: Visit): void {
    this.visitDetails$.next(visit);
  }
}
