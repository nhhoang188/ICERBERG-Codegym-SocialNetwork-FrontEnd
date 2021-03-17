import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PostComponent} from "./post/post.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {
    path: 'post',
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
