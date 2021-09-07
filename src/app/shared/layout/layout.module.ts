import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { LogoComponent } from './components/logo/logo.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  FlexLayoutModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatDividerModule,
  MatCardModule,
];

@NgModule({
  declarations: [
    LayoutPageComponent,
    HeaderComponent,
    FooterComponent,
    NavListComponent,
    LogoComponent,
  ],
  imports: [CommonModule, RouterModule, FlexLayoutModule, ...MATERIAL_MODULES],
  exports: [LayoutPageComponent],
})
export class LayoutModule {}
