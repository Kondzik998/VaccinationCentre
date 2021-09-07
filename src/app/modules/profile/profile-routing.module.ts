import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileVisitsDetailsPageComponent } from './pages/profile-visits-details-page/profile-visits-details-page.component';

const routes: Routes = [
  { path: '', component: ProfilePageComponent },
  { path: 'visit/:?id', component: ProfileVisitsDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
