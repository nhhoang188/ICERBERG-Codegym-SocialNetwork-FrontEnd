import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from './friendrequest/create/create.component';
import {DeleteComponent} from './friendrequest/delete/delete.component';
import {EditComponent} from './friendrequest/edit/edit.component';
import {ListComponent} from './friendrequest/list/list.component';

const routes: Routes = [
  {path: 'add' , component: CreateComponent},
  {path: 'list' , component: ListComponent},
  {path: 'update/:id' , component: EditComponent},
  {path: 'delete/:id' , component: DeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
