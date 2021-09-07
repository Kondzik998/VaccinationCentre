import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PageableContent } from 'src/app/core/models/pageable';
import type { Visit } from 'src/app/core/models/visit';

const initialVisitState: PageableContent<Visit> = {
  content: [],
  size: 10,
  page: 0,
};
@Injectable({
  providedIn: 'root',
})
export class PatientService {
  public visits$ = new BehaviorSubject<PageableContent<Visit>>(
    initialVisitState
  );
  constructor() {}

  public initialize(visits: PageableContent<Visit>) {
    this.visits$.next(visits);
  }

  public reset() {
    this.visits$.next(initialVisitState);
  }
}
