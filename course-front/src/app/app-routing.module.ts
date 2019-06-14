import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {UserPageComponent} from './user-page/user-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PostsComponent} from './posts/posts.component';
import {PostPageComponent} from './post-page/post-page.component';

const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'post', component: PostPageComponent},
  {path: 'admin', component: AdminPageComponent},
  {path: 'user', component: UserPageComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
