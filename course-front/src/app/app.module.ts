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
  MatSlideToggleModule
} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';

import {HomeComponent} from './home/home.component';
import { LoginDialogComponent } from './home/login-dialog/login-dialog.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginDialogComponent
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
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [HomeComponent],
  entryComponents: [LoginDialogComponent]
})
export class AppModule {
}
