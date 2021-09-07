import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import type { VisitFiltersState } from '../../../../core/dtos/visit-filter-state';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-visits-list-filters',
  templateUrl: './visits-list-filters.component.html',
  styleUrls: ['./visits-list-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisitsListFiltersComponent implements OnInit, OnChanges {
  @Input() state: VisitFiltersState = {};
  @Output() filtersChanged = new EventEmitter<VisitFiltersState>();

  filters = new FormGroup({
    city: new FormControl(''),
    fromDate: new FormControl(),
    toDate: new FormControl(),
    dose: new FormControl(''),
    manufacturer: new FormControl(''),
  });

  get fromDate() {
    return this.filters.get('fromDate');
  }

  get toDate() {
    return this.filters.get('toDate');
  }

  ngOnInit() {
    this.filters.valueChanges.pipe(debounceTime(350)).subscribe((value) => {
      this.filtersChanged.emit(value);
    });
  }

  ngOnChanges() {
    if (this.state && Object.keys(this.state).length > 0) {
      this.filters.setValue({
        ...this.filters.value,
        ...this.state,
      });
    }
  }
}
