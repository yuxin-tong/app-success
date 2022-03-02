import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysatacLogoComponent } from './mysatac-logo.component';

describe('MysatacLogoComponent', () => {
  let component: MysatacLogoComponent;
  let fixture: ComponentFixture<MysatacLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysatacLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysatacLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
