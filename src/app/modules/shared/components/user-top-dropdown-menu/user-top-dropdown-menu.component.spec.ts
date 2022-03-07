import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTopDropdownMenuComponent } from './user-top-dropdown-menu.component';

describe('UserTopDropdownMenuComponent', () => {
  let component: UserTopDropdownMenuComponent;
  let fixture: ComponentFixture<UserTopDropdownMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTopDropdownMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTopDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
