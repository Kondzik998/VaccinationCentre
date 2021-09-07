import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediacalStaffPageComponent } from './pages/mediacal-staff-page/mediacal-staff-page.component';

const routes: Routes = [{ path: '', component: MediacalStaffPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalStaffRoutingModule {}
