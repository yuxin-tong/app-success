import { AppConstants } from 'src/app/core/constants/app.constants';
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
}
