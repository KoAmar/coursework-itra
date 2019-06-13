import {Component, HostBinding} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  private darkTheme: boolean;

  constructor(public overlayContainer: OverlayContainer) {
  }

  @HostBinding('class') componentCssClass;

  onSetTheme(theme) {
    this.darkTheme = !this.darkTheme;
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }

}
