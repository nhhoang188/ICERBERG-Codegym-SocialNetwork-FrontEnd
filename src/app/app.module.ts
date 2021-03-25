import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CreatePostComponent} from './post/create-post/create-post.component';
import {EditPostComponent} from './post/edit-post/edit-post.component';
import {HomeComponent} from './home/home.component';
import {LogoutComponent} from './login/logout/logout.component';
import {ProfileComponent} from './profile/profile-user/profile.component';
import {FriendComponent} from './friendrequest/friend/friend.component';
import {ListfriendComponent} from './friendrequest/listfriend/listfriend.component';
import {MyWallComponent} from './profile/my-wall/my-wall.component';
import {MenuTimelineComponent} from './layout/menu-timeline/menu-timeline.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {FriendrequestService} from './services/friendrequest.service';
import {LoveService} from './services/love.service';
import {environment} from '../environments/environment';
import {LoveComponent} from './like/love/love.component';
import {MyPostComponent} from './post/my-post/my-post.component';
import {FriendSimilarComponent} from './friend-similar/friend-similar.component';
import { LoveCommentComponent } from './like/love-comment/love-comment.component';
import {ListUserComponent} from './admin/list-user/list-user.component';
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
    LoveCommentComponent,
    ListUserComponent,
    SocketComponent,
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
