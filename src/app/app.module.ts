import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FriendrequestService} from './services/friendrequest.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './login/logout/logout.component';
import {PostComponent} from "./post/post.component";
import { FriendComponent } from './friendrequest/friend/friend.component';
import { LoveComponent } from './like/love/love.component';
import { ProfileComponent } from './profile/profile-user/profile.component';
import {LoginComponent} from './login/login/login.component';
import {LoveService} from './services/love.service';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    PostComponent,
    FriendComponent,
    LoveComponent,
    ProfileComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FriendrequestService,LoveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
