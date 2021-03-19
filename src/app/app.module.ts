import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CreatePostComponent} from "./post/create-post/create-post.component";
import {EditPostComponent} from './post/edit-post/edit-post.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './login/logout/logout.component';
import { ProfileComponent } from './profile/profile-user/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreatePostComponent,
    EditPostComponent,
    HomeComponent,
    LogoutComponent,
    LogoutComponent,
    ProfileComponent
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
