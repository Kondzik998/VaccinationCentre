import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediacalStaffPageComponent } from './mediacal-staff-page.component';

describe('MediacalStaffPageComponent', () => {
  let component: MediacalStaffPageComponent;
  let fixture: ComponentFixture<MediacalStaffPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediacalStaffPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediacalStaffPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
