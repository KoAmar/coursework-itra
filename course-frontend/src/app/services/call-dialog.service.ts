import {Injectable} from '@angular/core';
import {LoginDialogComponent} from '../dialogs/login-dialog/login-dialog.component';
import {RegisterDialogComponent} from '../dialogs/register-dialog/register-dialog.component';
import {InfoDialogComponent} from '../dialogs/info-dialog/info-dialog.component';
import {MatDialog} from '@angular/material';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class CallDialogService {

  constructor(public dialog: MatDialog,
              private auth: AuthService) {
  }


  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      data: {name: 'this.name', animal: 'this.animal'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.showMessageBox(JSON.stringify(this.auth.parseJwt(result)));
      }
    });
  }

  openRegisterDialog() {
    const dialogRef = this.dialog.open(RegisterDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.showMessageBox(result);
      }
    });
  }

  showMessageBox(text: string): void {
    this.dialog.open(InfoDialogComponent, {
      data: {text}
    });
  }
}
