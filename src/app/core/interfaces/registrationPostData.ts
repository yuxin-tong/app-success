export interface RegistrationPostData {
  registration: RegistrationApplication | undefined;
  user: RegistrationUser;
}

export interface RegistrationApplication {
  applicationId: string;
  roles: string[];
}

export interface RegistrationUser {
  birthDate: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  id: string | undefined;
  data: RegistrationUserData;
}

export interface RegistrationUserData {
  gender: string;
  citizenshipStatus: string;
  privacyPolicy: string;
  termsAndConditions: string;
  subscription: boolean;
  isRegistered: boolean | undefined;
}
