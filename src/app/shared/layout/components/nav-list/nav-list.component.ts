import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavListComponent {
  @Input() direction: 'row' | 'column' = 'row';

  get isColumnDirection() {
    return this.direction === 'column';
  }
}
