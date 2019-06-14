import {Component, HostBinding} from '@angular/core';
import {MatDrawerToggleResult} from '@angular/material';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-navigation',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  @HostBinding('class') componentCssClass;
  drawerToggleResultPromise: Promise<MatDrawerToggleResult>;
  private darkTheme: boolean;

  constructor(public overlayContainer: OverlayContainer) {
    // this.currentTheme = localStorage.getItem('currentTheme');
    // this.overlayContainer.getContainerElement().classList.add(this.currentTheme);
    // this.componentCssClass = this.currentTheme;
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
