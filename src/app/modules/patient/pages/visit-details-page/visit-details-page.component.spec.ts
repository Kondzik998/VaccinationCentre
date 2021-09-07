import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitDetailsPageComponent } from './visit-details-page.component';

describe('VisitDetailsPageComponent', () => {
  let component: VisitDetailsPageComponent;
  let fixture: ComponentFixture<VisitDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisitDetailsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
