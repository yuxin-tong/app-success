import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysatacInfoComponent } from './mysatac-info.component';

describe('MysatacInfoComponent', () => {
  let component: MysatacInfoComponent;
  let fixture: ComponentFixture<MysatacInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysatacInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysatacInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
