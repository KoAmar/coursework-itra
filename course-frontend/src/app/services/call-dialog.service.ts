import {Injectable} from '@angular/core';
import {LoginDialogComponent} from '../main-menu/dialogs/login-dialog/login-dialog.component';
import {RegisterDialogComponent} from '../main-menu/dialogs/register-dialog/register-dialog.component';
import {InfoDialogComponent} from '../main-menu/dialogs/info-dialog/info-dialog.component';
import {MatDialog} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CallDialogService {

  constructor(public dialog: MatDialog) {
  }


  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      data: {name: 'this.name', animal: 'this.animal'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.showMessageBox(result);
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
