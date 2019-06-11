import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonToggleModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatFormFieldModule
} from '@angular/material';
import {HomeComponent} from './home/home.component';

import {DialogOverviewExample, DialogOverviewExampleDialog} from './input-dialog/input-dialog.component';

const MaterialComponents = [
  MatButtonToggleModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatFormFieldModule
];

@NgModule({
  declarations: [
    HomeComponent,
    DialogOverviewExample,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponents
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule {
}
