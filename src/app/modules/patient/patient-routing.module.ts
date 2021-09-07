import { PatientPageComponent } from './pages/patient-page/patient-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitDetailsPageComponent } from 'src/app/modules/patient/pages/visit-details-page/visit-details-page.component';

const routes: Routes = [
  { path: '', component: PatientPageComponent },
  { path: 'patient/visit/:?id', component: VisitDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
