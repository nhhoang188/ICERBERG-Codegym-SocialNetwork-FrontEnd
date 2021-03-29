import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './component/login/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CreatePostComponent} from './component/post/create-post/create-post.component';
import {EditPostComponent} from './component/post/edit-post/edit-post.component';
import {HomeComponent} from './component/home/home.component';
import {LogoutComponent} from './component/login/logout/logout.component';
import {ProfileComponent} from './component/profile/profile-user/profile.component';
import {FriendComponent} from './component/friend/friend/friend.component';
import {ListfriendComponent} from './component/friend/listfriend/listfriend.component';
import {MyWallComponent} from './component/profile/my-wall/my-wall.component';
import {MenuTimelineComponent} from './component/layout/menu-timeline/menu-timeline.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {FriendrequestService} from './services/friendrequest.service';
import {LoveService} from './services/love.service';
import {environment} from '../environments/environment';
import {LoveComponent} from './component/like/love/love.component';
import {MyPostComponent} from './component/post/my-post/my-post.component';
import {FriendSimilarComponent} from './component/friend/friend-similar/friend-similar.component';
import { LoveCommentComponent } from './component/like/love-comment/love-comment.component';
import { EditUserComponent } from './component/profile/edit-user/edit-user.component';
import { MyFriendComponent } from './component/profile/my-friend/my-friend.component';
import { SweetMemoryComponent } from './component/profile/sweet-memory/sweet-memory.component';
import {CommentComponent} from './component/comment/comment.component';
import { UserInfoComponent } from './component/comment/user-info/user-info.component';
import { NotificationComponent } from './component/notification/notification.component';
import { FriendPostComponent } from './component/post/friend-post/friend-post.component';
import { GuestPostComponent } from './component/post/guest-post/guest-post.component';
import {UserInfoComponentNoti} from './component/notification/user-info/user-info.component';
import {HeaderComponent} from './component/layout/header/header.component';
import { TimeLinePostComponent } from './component/home/time-line-post/time-line-post.component';
import { UserAvatarComponent } from './component/home/time-line-post/user-avatar/user-avatar.component';
import { UserFullnameComponent } from './component/home/time-line-post/user-fullname/user-fullname.component';
import { FriendYouknowComponent } from './component/home/time-line-post/friend-youknow/friend-youknow.component';
import { SimilarFriendComponent } from './component/home/time-line-post/friend-youknow/similar-friend/similar-friend.component';
import { EditDetailCommentComponent } from './component/comment/edit-detail-comment/edit-detail-comment.component';
import {ListUserComponent} from './component/admin/list-user/list-user.component';
import { SocketComponent } from './socket/socket.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreatePostComponent,
    EditPostComponent,
    HomeComponent,
    LogoutComponent,
    LoveComponent,
    FriendComponent,
    ProfileComponent,
    ListfriendComponent,
    MyWallComponent,
    MenuTimelineComponent,
    MyPostComponent,
    FriendSimilarComponent,
    EditUserComponent,
    MyFriendComponent,
    SweetMemoryComponent,
    CommentComponent,
    UserInfoComponent,
    NotificationComponent,
    FriendPostComponent,
    GuestPostComponent,
    UserInfoComponentNoti,
    HeaderComponent,
    TimeLinePostComponent,
    UserAvatarComponent,
    UserFullnameComponent,
    FriendYouknowComponent,
    SimilarFriendComponent,
    UserInfoComponentNoti,
    HeaderComponent,
    LoveCommentComponent,
    UserInfoComponent,
    MyFriendComponent,
    EditDetailCommentComponent,
    ListUserComponent,
    LoveCommentComponent,
    SocketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'cloud'),
    AngularFireStorageModule,
    FormsModule
  ],
  providers: [FriendrequestService, LoveService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
