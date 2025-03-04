import {Component, HostBinding} from '@angular/core';
import {MatDrawerToggleResult} from '@angular/material';
import {OverlayContainer} from '@angular/cdk/overlay';
import {CallDialogService} from '../services/call-dialog.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  @HostBinding('class') componentCssClass;
  drawerToggleResultPromise: Promise<MatDrawerToggleResult>;
  private darkTheme: boolean;

  // admin: boolean = this.authService.currentUser?;

  constructor(public overlayContainer: OverlayContainer,
              private dialogService: CallDialogService,
              private authService: AuthService) {
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
}
