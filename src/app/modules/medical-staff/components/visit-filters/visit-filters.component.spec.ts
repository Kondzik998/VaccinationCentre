import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitFiltersComponent } from './visit-filters.component';

describe('VisitFiltersComponent', () => {
  let component: VisitFiltersComponent;
  let fixture: ComponentFixture<VisitFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisitFiltersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
