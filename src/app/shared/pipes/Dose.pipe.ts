import { Pipe, PipeTransform } from '@angular/core';
import { VaccineDose } from 'src/app/core/enums/vaccine-dose';

@Pipe({ name: 'Dose' })
export class dose implements PipeTransform {
  transform(value: VaccineDose): string {
    if (value === VaccineDose.DOUBLE_DOSE) {
      return 'Double Dose';
    }
    return 'Single Dose';
  }
}
