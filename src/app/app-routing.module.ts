import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./user/user.component";
import {AuthGuard} from "./shared/guard/auth.guard";

const routes: Routes = [
  {
    path: "records",
    component: UserComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
