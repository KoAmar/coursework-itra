import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OverlayModule} from '@angular/cdk/overlay';
import {HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule, MatToolbarModule, MatFormFieldModule, MatDialogModule,
  MatSlideToggleModule, MatListModule, MatIconModule, MatSidenavModule, MatSelectModule, MatInputModule, MatCardModule
} from '@angular/material';


import {AppRoutingModule} from './app-routing.module';

import {MainMenuComponent} from './main-menu/main-menu.component';
import {UserPageComponent} from './main-menu/pages/user-page/user-page.component';
import {AdminPageComponent} from './main-menu/pages/admin-page/admin-page.component';
import {PageNotFoundComponent} from './main-menu/pages/page-not-found/page-not-found.component';
import {HomePageComponent} from './main-menu/pages/home-page/home-page.component';
import {PostPageComponent} from './main-menu/pages/post-page/post-page.component';
import {RegisterDialogComponent} from './main-menu/dialogs/register-dialog/register-dialog.component';
import {LoginDialogComponent} from './main-menu/dialogs/login-dialog/login-dialog.component';
import {ConfirmedPageComponent} from './main-menu/pages/confirmed-page/confirmed-page.component';
import {InfoDialogComponent} from './main-menu/dialogs/info-dialog/info-dialog.component';

import {AuthService} from './services/auth.service';
import {CallDialogService} from './services/call-dialog.service';

@NgModule({
  declarations: [
    MainMenuComponent,
    UserPageComponent,
    AdminPageComponent,
    PageNotFoundComponent,
    HomePageComponent,
    PostPageComponent,
    RegisterDialogComponent,
    LoginDialogComponent,
    ConfirmedPageComponent,
    InfoDialogComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
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
    MatInputModule,
    MatCardModule,
    FormsModule,
  ],
  providers: [AuthService, CallDialogService],
  bootstrap: [MainMenuComponent],
  entryComponents: [RegisterDialogComponent, LoginDialogComponent, InfoDialogComponent]
})
export class AppModule {
}
