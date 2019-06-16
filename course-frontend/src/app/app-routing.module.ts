import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminPageComponent} from './main-menu/pages/admin-page/admin-page.component';
import {UserPageComponent} from './main-menu/pages/user-page/user-page.component';
import {PageNotFoundComponent} from './main-menu/pages/page-not-found/page-not-found.component';
import {HomePageComponent} from './main-menu/pages/home-page/home-page.component';
import {PostPageComponent} from './main-menu/pages/post-page/post-page.component';
import {ConfirmedPageComponent} from './main-menu/pages/confirmed-page/confirmed-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'post', component: PostPageComponent},
  {path: 'admin', component: AdminPageComponent},
  {path: 'user', component: UserPageComponent},
  {path: 'confirmed', component: ConfirmedPageComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
