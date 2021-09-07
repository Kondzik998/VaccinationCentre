import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalStaffRoutingModule } from './medical-staff-routing.module';
import { MediacalStaffPageComponent } from './pages/mediacal-staff-page/mediacal-staff-page.component';
import { VisitFiltersComponent } from './components/visit-filters/visit-filters.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [MediacalStaffPageComponent, VisitFiltersComponent],
  imports: [
    CommonModule,
    MedicalStaffRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
})
export class MedicalStaffModule {}
