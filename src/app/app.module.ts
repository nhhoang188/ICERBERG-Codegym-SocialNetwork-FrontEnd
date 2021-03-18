import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FriendrequestService} from './service/friendrequest.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import {PostComponent} from "./post/post.component";
import { FriendComponent } from './friendrequest/friend/friend.component';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    HomeComponent,
    LogoutComponent,
    PostComponent,
    FriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FriendrequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
