import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentHomePageComponent } from './employment-home-page.component';

describe('EmploymentHomePageComponent', () => {
  let component: EmploymentHomePageComponent;
  let fixture: ComponentFixture<EmploymentHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
