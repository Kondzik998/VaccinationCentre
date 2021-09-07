import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { LayoutPageComponent } from './layout/pages/layout-page/layout-page.component';
import { MatTableModule } from '@angular/material/table';
import { VisitListComponent } from './layout/components/visit-list/visit-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VisitDetailsComponent } from './layout/components/visit-details/visit-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { dose } from 'src/app/shared/pipes/Dose.pipe';
import { MatButtonModule } from '@angular/material/button';
import { PanelComponent } from './layout/components/panel/panel.component';
import { VaccinePipe } from './pipes/vaccine.pipe';

@NgModule({
  declarations: [
    VisitListComponent,
    VisitDetailsComponent,
    PanelComponent,
    dose,
    VaccinePipe,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatTableModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    LayoutPageComponent,
    VisitListComponent,
    VisitDetailsComponent,
    PanelComponent,
    VaccinePipe,
  ],
})
export class SharedModule {}
