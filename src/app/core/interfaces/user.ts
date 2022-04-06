export interface User {
  birthDate?: string | undefined;
  email?: string | undefined;
  username?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  password?: string | undefined;
  id?: string | undefined;
  data: UserData;
}

export interface UserData {
  gender?: string | undefined;
  citizenshipStatus?: string | undefined;
  privacyPolicy?: string | undefined;
  termsAndConditions?: string | undefined;
  subscription?: boolean | undefined;
  isRegistered?: boolean | undefined;
}
