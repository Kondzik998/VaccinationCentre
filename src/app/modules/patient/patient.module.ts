import { VisitDetailsPageComponent } from './pages/visit-details-page/visit-details-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { PatientRoutingModule } from './patient-routing.module';
import { PatientPageComponent } from './pages/patient-page/patient-page.component';
import { VisitsListFiltersComponent } from './components/visits-list-filters/visits-list-filters.component';
import { PatientService } from './services/patient.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatExpansionModule,
  MatIconModule,
  MatButtonModule,
  FlexLayoutModule,
  MatTableModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [
    PatientPageComponent,
    VisitsListFiltersComponent,
    VisitDetailsPageComponent,
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule,
    ...MATERIAL_MODULES,
    SharedModule,
  ],
  exports: [PatientPageComponent],
  providers: [PatientService],
})
export class PatientModule {}
