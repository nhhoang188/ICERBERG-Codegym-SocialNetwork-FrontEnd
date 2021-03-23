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
import {ListfriendComponent} from './friendrequest/listfriend/listfriend.component';
import {MyWallComponent} from './profile/my-wall/my-wall.component';
import {MyPostComponent} from './post/my-post/my-post.component';
import {FriendSimilarComponent} from './friend-similar/friend-similar.component';
import {EditUserComponent} from './profile/edit-user/edit-user.component';
import {MyFriendComponent} from './profile/my-friend/my-friend.component';

const routes: Routes = [
  {path: 'friend', component: FriendComponent},
  {path: 'mypost', component: MyPostComponent},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'logout', component: LogoutComponent, pathMatch: 'full'},
  {path: 'profile/:id/about', component: ProfileComponent, pathMatch: 'full'},
  {path: 'profile/:id', component: MyWallComponent, pathMatch: 'full'},
  {path: 'profile/:id/friends', component: MyFriendComponent, pathMatch: 'full'},
  {path: 'edit-profile', component: EditUserComponent, pathMatch: 'full'},
  {path: 'love', component: LoveComponent, pathMatch: 'full'},
  {path: 'listfriend', component: ListfriendComponent, pathMatch: 'full'},
  {path: 'similar', component: FriendSimilarComponent, pathMatch: 'full'},
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
