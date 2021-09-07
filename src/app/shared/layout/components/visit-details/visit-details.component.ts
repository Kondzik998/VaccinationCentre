import type { Visit } from './../../../../core/models/visit';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-visit-details',
  templateUrl: './visit-details.component.html',
  styleUrls: ['./visit-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisitDetailsComponent {
  @Input() visit: Visit;
}
