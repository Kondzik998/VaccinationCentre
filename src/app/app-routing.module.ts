import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'medical-staff',
    loadChildren: () =>
      import('./modules/medical-staff/medical-staff.module').then(
        (m) => m.MedicalStaffModule
      ),
  },
  {
    path: 'patient',
    loadChildren: () =>
      import('./modules/patient/patient.module').then((m) => m.PatientModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then((m) => m.ProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
