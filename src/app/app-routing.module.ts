import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreatePostComponent} from './post/create-post/create-post.component';
import {EditPostComponent} from './post/edit-post/edit-post.component';
import {LoginComponent} from './login/login/login.component';
import {HomeComponent} from './home/home.component';
import {LogoutComponent} from './login/logout/logout.component';
import {ProfileComponent} from './profile/profile-user/profile.component';
import {LoveComponent} from './like/love/love.component';
import {FriendComponent} from './friendrequest/friend/friend.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'love', component: LoveComponent, pathMatch: 'full'},
  {path: 'friend', component: FriendComponent},
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'logout', component: LogoutComponent, pathMatch: 'full'},
  {path: 'profile/:id', component: ProfileComponent, pathMatch: 'full'},
  {
    path: 'create-post',
    component: CreatePostComponent
  },
  {
    path: 'edit-post/:id',
    component: EditPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
