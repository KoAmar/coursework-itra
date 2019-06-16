import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {AuthService} from '../../../services/auth.service';
import {RestResponse} from '../../../models/rest-responce.model';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent {
  hide = true;

  username: string;
  email: string;
  password: string;
  confirmPassword: string;

  message: string;
  errors: boolean;

  constructor(
    private dialogRef: MatDialogRef<RegisterDialogComponent>,
    private authenticationService: AuthService,
  ) {
    this.errors = false;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  registerClick(): void {
    this.authenticationService.register(this.username, this.email, this.password)
      .subscribe((data) => {
        if (data.success) {
          alert('Check your email for new messages)');
          this.dialogRef.close();
        } else {
          this.message = data.message;
          this.errors = true;
        }
      }, (err) => {
        this.message = err.message;
        this.errors = true;
      });


  }
}
