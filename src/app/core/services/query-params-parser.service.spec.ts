import { TestBed } from '@angular/core/testing';

import { QueryParamsParserService } from './query-params-parser.service';

describe('QueryParamsParserService', () => {
  let service: QueryParamsParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryParamsParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
