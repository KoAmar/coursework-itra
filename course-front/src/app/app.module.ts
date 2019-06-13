import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {OverlayContainer, OverlayModule} from '@angular/cdk/overlay';
import {
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSlideToggleModule, MatListModule, MatIconModule, MatSidenavModule, MatSelectModule
} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';

import {HomeComponent} from './home/home.component';
import {LoginDialogComponent} from './home/login-dialog/login-dialog.component';
import {NavigationComponent} from './navigation/navigation.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginDialogComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [NavigationComponent],
  entryComponents: [LoginDialogComponent]
})
export class AppModule {
}
