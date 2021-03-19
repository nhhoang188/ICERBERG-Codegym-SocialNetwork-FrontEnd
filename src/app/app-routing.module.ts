import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from './post/post.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile-user/profile.component';
import {FriendComponent} from './friendrequest/friend/friend.component';
import {LoginComponent} from './login/login/login.component';
import {LogoutComponent} from './login/logout/logout.component';
import {LoveComponent} from './like/love/love.component';

const routes: Routes = [
  {path: 'friend', component: FriendComponent},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'logout', component: LogoutComponent, pathMatch: 'full'},
  {path: 'profile/:id', component: ProfileComponent, pathMatch: 'full'},
  {path: 'love', component: LoveComponent, pathMatch: 'full'},
  {
    path: 'post',
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
