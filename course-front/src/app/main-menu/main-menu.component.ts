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
  private darkTheme: boolean;
  drawerToggleResultPromise: Promise<MatDrawerToggleResult>;

  constructor(public overlayContainer: OverlayContainer) {
  }


  onSetTheme(theme) {
    this.darkTheme = !this.darkTheme;
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }

  olert() {
    alert('2');
  }
}
