import { Meta, Story } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VisitsListFiltersComponent } from '../app/modules/patient/components/visits-list-filters/visits-list-filters.component';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';

export default {
  title: 'patient/visits-list-filters',
  component: VisitsListFiltersComponent,
  decorators: [
    moduleMetadata({
      declarations: [VisitsListFiltersComponent],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
        MatSelectModule,
        FlexLayoutModule,
        MatExpansionModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<VisitsListFiltersComponent> = (args) => ({
  props: args,
});

export const basic = Template.bind({});
basic.args = {};
