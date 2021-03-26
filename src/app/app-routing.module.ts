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
import {LoveCommentComponent} from './like/love-comment/love-comment.component';
import {SocketComponent} from './socket/socket.component';
import {EditUserComponent} from './profile/edit-user/edit-user.component';
import {MyFriendComponent} from './profile/my-friend/my-friend.component';
import {CommentComponent} from './comment/comment.component';
import {NotificationComponent} from './notification/notification.component';
import {GuestPostComponent} from './post/guest-post/guest-post.component';
import {FriendPostComponent} from './post/friend-post/friend-post.component';
import {HeaderComponent} from './layout/header/header.component';
import {EditDetailCommentComponent} from "./comment/edit-detail-comment/edit-detail-comment.component";

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
  {path: 'socket', component: SocketComponent, pathMatch: 'full'},

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
