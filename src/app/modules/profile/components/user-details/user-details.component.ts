import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDetails } from 'src/app/core/models/user-details';
import { UserProfile } from 'src/app/core/models/user-profile';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent implements OnChanges {
  public genders = [
    { value: 'MALE', viewValue: 'Male' },
    { value: 'FEMALE', viewValue: 'Female' },
    { value: 'OTHER', viewValue: 'Other' },
    { value: 'DO_NOT_WANT_TO_SAY', viewValue: "Don't want to say" },
  ];

  @Input() showEditable = false;
  @Input() state?: UserProfile | null;
  @Output() profileEdit = new EventEmitter<UserDetails>();

  public userDetailsForm: FormGroup;

  public ngOnChanges(): void {
    this.userDetailsForm.patchValue({
      ...this.state,
      ...(this.state?.userDetailsDTO || {}),
    });
  }

  constructor(private formBuilder: FormBuilder) {
    this.userDetailsForm = this.formBuilder.group({
      username: [null],
      firstName: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      otherNames: [null],
      lastName: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      gender: [null, [Validators.required]],
      dateOfBirth: [null, [Validators.required]],
      country: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      city: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      street: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      contactPhone: [
        null,
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(12),
        ],
      ],
      email: [null],
    });
    this.onEditClicked();
  }

  public onEditClicked(): void {
    this.showEditable = !this.showEditable;
    this.showEditable === false
      ? this.userDetailsForm.enable()
      : this.userDetailsForm.disable();
    this.userDetailsForm.get('email')?.disable();
    this.userDetailsForm.get('isVaccinated')?.disable();
    this.userDetailsForm.get('username')?.disable();
  }

  public onEditProfile(): void {
    this.profileEdit.emit(this.userDetailsForm.value);
    this.onEditClicked();
  }
}
