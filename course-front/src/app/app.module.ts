import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OverlayModule} from '@angular/cdk/overlay';
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
    MatInputModule,
    MatCardModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [MainMenuComponent],
  entryComponents: [RegisterDialogComponent, LoginDialogComponent]
})
export class AppModule {
}
