import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './friendrequest/create/create.component';
import { DeleteComponent } from './friendrequest/delete/delete.component';
import { EditComponent } from './friendrequest/edit/edit.component';
import {FriendrequestService} from './service/friendrequest.service';
import {HttpClientModule} from '@angular/common/http';
import { ListComponent } from './friendrequest/list/list.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import {PostComponent} from "./post/post.component";

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DeleteComponent,
    EditComponent,
    ListComponent
    AppComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [FriendrequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
