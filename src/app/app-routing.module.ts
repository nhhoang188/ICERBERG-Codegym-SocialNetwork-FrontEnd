import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreatePostComponent} from './component/post/create-post/create-post.component';
import {EditPostComponent} from './component/post/edit-post/edit-post.component';
import {LoginComponent} from './component/login/login/login.component';
import {HomeComponent} from './component/home/home.component';
import {LogoutComponent} from './component/login/logout/logout.component';
import {ProfileComponent} from './component/profile/profile-user/profile.component';
import {LoveComponent} from './component/like/love/love.component';
import {FriendComponent} from './component/friend/friend/friend.component';
import {ListfriendComponent} from './component/friend/listfriend/listfriend.component';
import {MyWallComponent} from './component/profile/my-wall/my-wall.component';
import {MyPostComponent} from './component/post/my-post/my-post.component';
import {FriendSimilarComponent} from './component/friend/friend-similar/friend-similar.component';
import {LoveCommentComponent} from './component/like/love-comment/love-comment.component';
import {SocketComponent} from './socket/socket.component';
import {EditUserComponent} from './component/profile/edit-user/edit-user.component';
import {MyFriendComponent} from './component/profile/my-friend/my-friend.component';
import {CommentComponent} from './component/comment/comment.component';
import {NotificationComponent} from './component/notification/notification.component';
import {GuestPostComponent} from './component/post/guest-post/guest-post.component';
import {FriendPostComponent} from './component/post/friend-post/friend-post.component';
import {HeaderComponent} from './component/layout/header/header.component';
import {EditDetailCommentComponent} from "./component/comment/edit-detail-comment/edit-detail-comment.component";

const routes: Routes = [
  {path: 'friend', component: FriendComponent},
  {path: 'noti', component: NotificationComponent},
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
  {path: 'search', component: HeaderComponent, pathMatch: 'full'},
  {path: 'lovecomment', component: LoveCommentComponent, pathMatch: 'full'},
  {path: 'message', component: SocketComponent, pathMatch: 'full'},

  {
    path: 'create-post',
    component: CreatePostComponent
  },
  {
    path: 'edit-post/:id',
    component: EditPostComponent
  },
  {
    path: 'posts/public/:userId',
    component: GuestPostComponent
  },
  {
    path: 'posts/friend/:userId',
    component: FriendPostComponent
  },
  {
    path: 'comment',
    component: CommentComponent
  },
  {
    path: ':postId/edit-detail-comment/:commentId',
    component: EditDetailCommentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
