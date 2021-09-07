import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileVisitsDetailsPageComponent } from './profile-visits-details-page.component';

describe('ProfileVisitsDetailsPageComponent', () => {
  let component: ProfileVisitsDetailsPageComponent;
  let fixture: ComponentFixture<ProfileVisitsDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileVisitsDetailsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileVisitsDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
