import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePublicDrawerComponent } from './mobile-public-drawer.component';

describe('MobilePublicDrawerComponent', () => {
  let component: MobilePublicDrawerComponent;
  let fixture: ComponentFixture<MobilePublicDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilePublicDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePublicDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
