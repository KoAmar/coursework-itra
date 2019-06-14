import { Component, OnInit } from '@angular/core';
// import {AuthenticationService} from "../../../../../v5/frontend/src/app/services/authentication.service";
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {

  hide = true;
  username: string;
  password: string;

  constructor(
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    // private authenticationService: AuthenticationService
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  signInClick(): void {
    // this.authenticationService.signIn(this.username, this.password);
    this.dialogRef.close();
  }
}
