import { AppConstants } from 'src/app/core/constants/app.constants';
import { User, UserData } from '../interfaces/user';
export class Utils {
  static getDateStr(date: Date): string {
    const d = new Date(date);
    var year = d.getFullYear();
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  static getPasswordValidity(password: string): boolean[] {
    return AppConstants.PASSWORD_REGEX.map((regex: RegExp) => {
      return regex.test(password);
    });
  }

  static mapToUser(source: any): User {
    var user = {} as User;
    user.id = source.id;
    user.email = source.email;
    user.username = source.username;
    user.firstName = source.firstName;
    user.lastName = source.lastName;
    user.birthDate = source.birthDate;

    if (source.data) {
      user.data = {} as UserData;
      user.data.citizenshipStatus = source.data.citizenshipStatus;
      user.data.gender = source.data.gender;
      user.data.isRegistered = source.data.isRegistered;
      user.data.privacyPolicy = source.data.privacyPolicy;
      user.data.termsAndConditions = source.data.termsAndConditions;
    }

    return user;
  }
}
