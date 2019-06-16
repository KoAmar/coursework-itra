import {Component, HostBinding} from '@angular/core';
import {MatDialog, MatDrawerToggleResult} from '@angular/material';
import {OverlayContainer} from '@angular/cdk/overlay';
import {RegisterDialogComponent} from './dialogs/register-dialog/register-dialog.component';
import {LoginDialogComponent} from './dialogs/login-dialog/login-dialog.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  @HostBinding('class') componentCssClass;
  drawerToggleResultPromise: Promise<MatDrawerToggleResult>;
  private darkTheme: boolean;

  constructor(public overlayContainer: OverlayContainer,
              public dialog: MatDialog) {
    switch (localStorage.getItem('darkMode')) {
      case 'true':
        this.setDarkTheme();
        break;
      case 'false':
        this.setLightTheme();
        break;
      default:
        this.setDarkTheme();
    }
  }

  toggleTheme() {
    this.darkTheme ? this.setLightTheme() : this.setDarkTheme();
  }

  setDarkTheme() {
    this.darkTheme = true;
    localStorage.setItem('darkMode', String(this.darkTheme));
    this.onSetTheme('dark-theme');
  }

  setLightTheme() {
    this.darkTheme = false;
    localStorage.setItem('darkMode', String(this.darkTheme));
    this.onSetTheme('light-theme');
  }

  onSetTheme(theme) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;

  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      data: {name: 'this.name', animal: 'this.animal'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  openRegisterDialog() {
    const dialogRef = this.dialog.open(RegisterDialogComponent, {
      data: {name: 'this.name', animal: 'this.animal'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
