import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {OverlayModule} from '@angular/cdk/overlay';
import {
  MatButtonModule, MatToolbarModule, MatFormFieldModule, MatDialogModule,
  MatSlideToggleModule, MatListModule, MatIconModule, MatSidenavModule, MatSelectModule, MatInputModule
} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';

import {HomeComponent} from './home/home.component';
import {LoginDialogComponent} from './home/login-dialog/login-dialog.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostPreviewComponent } from './posts/post-preview/post-preview.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginDialogComponent,
    MainMenuComponent,
    UserPageComponent,
    AdminPageComponent,
    PageNotFoundComponent,
    PostsComponent,
    PostPageComponent,
    PostPreviewComponent
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
  ],
  providers: [],
  bootstrap: [MainMenuComponent],
  entryComponents: [LoginDialogComponent]
})
export class AppModule {
}
