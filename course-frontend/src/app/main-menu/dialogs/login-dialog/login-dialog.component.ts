import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {

  hide = true;
  password: string;
  email: string;
  error: string;

  constructor(
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    private authenticationService: AuthService
  ) {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  registerClick(): void {
    this.authenticationService.login(this.email, this.password).subscribe(
      (data) => {
        if (data.success) {
          this.dialogRef.close(data.token);
        }
      },
      error1 => {
        this.error = 'Auth error';
      }
    );


  }
}
