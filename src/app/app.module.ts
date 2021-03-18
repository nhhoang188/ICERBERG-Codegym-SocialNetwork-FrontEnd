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

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DeleteComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FriendrequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
