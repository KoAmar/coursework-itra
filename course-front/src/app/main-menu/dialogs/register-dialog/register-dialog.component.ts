import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

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

  messages: Array<string>;
  errors: boolean;

  constructor(
    private dialogRef: MatDialogRef<RegisterDialogComponent>,
    // private authenticationService: AuthenticationService,
  ) {
    this.errors = false;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  registerClick(): void {
    // this.authenticationService.signUp(this.username, this.email, this.password)
    //   .subscribe(infoResponse => {
    //     if (infoResponse.success) {
    //       this.dialogRef.close();
    //     } else {
    //       this.messages = infoResponse.messages;
    //       this.errors = true;
    //     }
    //   });


  }
}
