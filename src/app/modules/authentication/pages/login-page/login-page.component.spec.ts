import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../../authentication.service';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let authServiceSpy: any;
  let authenticationServiceStub: Partial<AuthenticationService>;

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AuthenticationService', ['login']);
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      providers: [{ provide: AuthenticationService, useValue: authServiceSpy }],
      declarations: [LoginPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    authServiceSpy = TestBed.get(AuthenticationService);
    console.warn('############');
    console.log(authenticationServiceStub);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should call authentication service when form is valid`, () => {
    component.loginForm.controls['email'].setValue('test@email.com');
    component.loginForm.controls['password'].setValue('test@email.com');
    authServiceSpy.login.and.returnValue(of('some value'));
    component.login();

    expect(authServiceSpy.login).toHaveBeenCalled();
  });

  it(`should not call authentication service when form is valid`, () => {
    component.loginForm.controls['email'].setValue('');
    component.loginForm.controls['password'].setValue('test@email.com');
    authServiceSpy.login.and.returnValue(of('some value'));
    component.login();

    expect(authServiceSpy.login).not.toHaveBeenCalled();
  });
});
