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

import {HomeComponent} from './home/home.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {UserPageComponent} from './user-page/user-page.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PostsPageComponent} from './posts-page/posts-page.component';
import {PostPageComponent} from './post-page/post-page.component';
import {RegisterDialogComponent} from './main-menu/register-dialog/register-dialog.component';
import {LoginDialogComponent} from './main-menu/login-dialog/login-dialog.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainMenuComponent,
    UserPageComponent,
    AdminPageComponent,
    PageNotFoundComponent,
    PostsPageComponent,
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
