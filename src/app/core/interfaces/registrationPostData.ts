export interface RegistrationPostData {
  registration: RegistrationApplication;
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
  data: RegistrationUserData;
}

export interface RegistrationUserData {
  gender: string;
  citizenship: string;
  subscription: boolean;
}
