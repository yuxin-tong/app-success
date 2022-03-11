import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFooterComponent } from './mobile-footer.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
describe('MobileFooterComponent', () => {
  let component: MobileFooterComponent;
  let fixture: ComponentFixture<MobileFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatBottomSheetModule],
      declarations: [MobileFooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
