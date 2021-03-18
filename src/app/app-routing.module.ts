import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {PostComponent} from "./post/post.component";
import {HomeComponent} from './home/home.component';
import {LogoutComponent} from './logout/logout.component';
import {FriendComponent} from './friendrequest/friend/friend.component';

const routes: Routes = [
  {path: 'friend' , component: FriendComponent},

  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'logout', component: LogoutComponent, pathMatch: 'full'},
  {
    path: 'post',
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
