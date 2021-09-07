import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditAccountComponent {
  @Output() editClicked = new EventEmitter<void>();

  public onEditClicked(): void {
    this.editClicked.emit();
  }
}
