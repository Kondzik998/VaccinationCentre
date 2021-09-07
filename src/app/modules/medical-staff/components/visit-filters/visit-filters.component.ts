import { debounceTime } from 'rxjs/operators';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MediacalStaffVisitFilterState } from 'src/app/core/dtos/visit-filter-state';
import { VaccinationManufacture } from 'src/app/core/enums/vaccination-manufacture';

@Component({
  selector: 'app-visit-filters',
  templateUrl: './visit-filters.component.html',
  styleUrls: ['./visit-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisitFiltersComponent implements OnInit {
  @Input() state: MediacalStaffVisitFilterState | null = {};
  @Output() changed = new EventEmitter<MediacalStaffVisitFilterState>();

  public filtersForm = new FormGroup({
    city: new FormControl(''),
    fromDate: new FormControl(),
    toDate: new FormControl(),
    manufacturer: new FormControl(''),
    patientName: new FormControl(''),
  });

  public vaccinationManufacture = VaccinationManufacture;

  get fromDate() {
    return this.filtersForm.get('visitDateFrom');
  }

  get toDate() {
    return this.filtersForm.get('visitDateFrom');
  }

  ngOnInit() {
    this.filtersForm.valueChanges.pipe(debounceTime(350)).subscribe((value) => {
      this.changed.emit(value);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.state?.currentValue) {
      this.filtersForm.setValue({
        ...this.filtersForm.value,
        ...this.state,
      });
    }
  }
}
