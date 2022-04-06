import { User } from './user';

export interface RegistrationPostData {
  registration: RegistrationApplication | undefined;
  user: User;
}

export interface RegistrationApplication {
  applicationId: string;
  roles: string[];
}
