import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CreatePostComponent} from "./post/create-post/create-post.component";
import {EditPostComponent} from './post/edit-post/edit-post.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './login/logout/logout.component';
import { FriendComponent } from './friendrequest/friend/friend.component';
import { LoveComponent } from './like/love/love.component';
import { ProfileComponent } from './profile/profile-user/profile.component';
import {LoginComponent} from './login/login/login.component';
import { ListfriendComponent } from './friendrequest/listfriend/listfriend.component';

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
    LoveComponent,
    ProfileComponent,
    ListfriendComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
