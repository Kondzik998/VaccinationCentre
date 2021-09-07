import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import type { VisitFiltersQueryParams } from 'src/app/core/models/visit-filters-query-params';
import type { Visit } from 'src/app/core/models/visit';
import { PageableContent } from 'src/app/core/models/pageable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VaccinationDatetesClientService {
  constructor(private httpClient: HttpClient) {}

  registerById(visitId: number) {
    return this.httpClient.put<Visit>(
      `/api/user/visits/vaccination-dates/${visitId}`,
      visitId
    );
  }

  getById(visitId: number) {
    return this.httpClient.get<Visit>(
      `/api/user/visits/vaccination-dates/${visitId}`
    );
  }

  get(
    pageOptions: { page: number; size: number },
    filters: VisitFiltersQueryParams
  ): Observable<PageableContent<Visit>> {
    const httpParams = new HttpParams({
      fromObject: { ...pageOptions, ...filters },
    });
    return this.httpClient
      .get<Visit[]>(
        `api/user/visits/vaccination-dates?` + httpParams.toString(),
        { observe: 'response' }
      )
      .pipe(
        map((res) => ({
          content: res.body!,
          total: parseInt(res.headers.get('Items')!),
          size: parseInt(res.headers.get('currentsize')!),
          page: parseInt(res.headers.get('currentpage')!),
        }))
      );
  }
}
