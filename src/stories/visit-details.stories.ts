import { Meta, Story } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VisitDetailsComponent } from '../app/shared/layout/components/visit-details/visit-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';

export default {
  title: 'patient/visit-details',
  component: VisitDetailsComponent,
  decorators: [
    moduleMetadata({
      declarations: [VisitDetailsComponent],
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatDividerModule,
        FlexLayoutModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<VisitDetailsComponent> = (args) => ({
  props: args,
});

export const basic = Template.bind({});
basic.args = {
  visitDate: '01-09-2021',
  visitDateTime: '12:20',
  vaccineName: 'Pfilzer',
  facilityName: 'szpital w Olsztynie',
  facilityCountry: 'Poland',
  facilityCity: 'Olsztyn',
  facilityStreet: 'Iwaszkiewicza 30',
  facilityContactPhone: '123 456 789',
};
