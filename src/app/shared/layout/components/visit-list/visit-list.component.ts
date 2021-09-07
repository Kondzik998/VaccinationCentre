import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import type { Visit } from 'src/app/core/models/visit';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisitListComponent {
  @Input() data: Visit[] = [];
  @Input() columnsData: { columns: (keyof Visit)[]; columnsNames: string[] } = {
    columns: [],
    columnsNames: [],
  };
  @Output() visitClick = new EventEmitter<Visit>();

  visitData = new MatTableDataSource<Partial<Record<keyof Visit, any>>>([]);

  visitListClick(visit: Visit) {
    this.visitClick.emit(visit);
  }

  get columns() {
    return this.columnsData.columns;
  }

  get columnsNames() {
    return this.columnsData.columnsNames;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.data.firstChange && changes.data.currentValue) {
      const data = this.data?.map(
        ({
          visitDate,
          visitDateTime,
          facility,
          vaccine,
          id,
          tookPlace,
          userDetails,
        }) => ({
          id,
          visitDate,
          visitDateTime,
          facility: facility.name,
          vaccine: vaccine.name,
          tookPlace: tookPlace ? 'Available' : 'Unavailable',
          ...(userDetails && { userDetails: userDetails.lastName }),
        })
      );
      this.visitData = new MatTableDataSource<
        Partial<Record<keyof Visit, any>>
      >(data);
    }
  }
}
