import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-policy',
  templateUrl: './password-policy.component.html',
  styleUrls: ['./password-policy.component.scss'],
})
export class PasswordPolicyComponent implements OnInit {
  @Input()
  valid = Array(5).fill(false);

  descriptions = [
    'One lowercase character',
    'One uppercase character',
    'One number',
    'One special character',
    '8 character minimum',
  ];
  constructor() {}

  ngOnInit(): void {}

  matIcon(valid: boolean) {
    return valid ? 'done' : 'circle';
  }
}
