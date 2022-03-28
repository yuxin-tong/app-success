import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrivacyPolicy } from '../interfaces/privacyPolicy';
import { TermsConditions } from '../interfaces/termsCondition';
import { ValueDescription } from '../interfaces/valueDescription';

@Injectable({
  providedIn: 'root',
})
export class MetadataService {
  constructor(private http: HttpClient) {}

  getValueDescriptionList(data: string) {
    return this.http.get<ValueDescription[]>('/api/' + data);
  }

  getTermsConditions() {
    return this.http.get<TermsConditions>('/api/termsAndConditions');
  }

  getPrivacyPolicy() {
    return this.http.get<PrivacyPolicy>('/api/privacyPolicy');
  }
}
