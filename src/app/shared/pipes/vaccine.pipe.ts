import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vaccine',
})
export class VaccinePipe implements PipeTransform {
  transform(value: any): any {
    return value ? 'Yes' : 'No';
  }
}
