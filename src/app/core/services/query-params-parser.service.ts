import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QueryParamsParserService {
  public getParsedQueries<T>(data: any): T {
    if (!QueryParamsParserService.isValidParam(data)) {
      return <T>{};
    }

    return Object.entries(data)
      .filter(([, value]) => QueryParamsParserService.isValidParam(value))
      .reduce((acc, [key, value]) => {
        return <T>{
          ...acc,
          [key]: QueryParamsParserService.transformParameter(value),
        };
      }, <T>{});
  }

  public parseQueryParams<T>(data: any): T {
    return Object.entries(data)
      .filter(([, value]) => QueryParamsParserService.isValidParam(value))
      .reduce((acc, [key, value]) => {
        return <T>{
          ...acc,
          [key]: QueryParamsParserService.parseParameter(value),
        };
      }, <T>{});
  }

  private static isValidParam(param: any): boolean {
    return ![undefined, null, ''].includes(param);
  }

  private static transformParameter(param: any): any {
    if (param instanceof Date) {
      const date = new Date(
        param.getTime() - QueryParamsParserService.getTimezoneOffset()
      );
      return date.toISOString().slice(0, 10);
    }
    return param;
  }

  private static parseParameter(param: any): any {
    if (isNaN(param)) {
      const unixTimeZero = Date.parse(param);
      if (!isNaN(unixTimeZero)) {
        const date = new Date(
          unixTimeZero + QueryParamsParserService.getTimezoneOffset()
        );
        return date;
      }
    }
    return String(param);
  }

  private static getTimezoneOffset(): number {
    return new Date().getTimezoneOffset() * 60000;
  }
}
