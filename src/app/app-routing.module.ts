import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./user/user.component";
import {AuthGuard} from "./shared/guard/auth.guard";
import {AppComponent} from "./app.component";
import {UserComponentForm} from "./user/user-form.component";
import {AuthFormGuard} from "./shared/guard/auth-form.guard";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'records',
        component: UserComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'records/new',
        component: UserComponentForm,
        canActivate: [AuthFormGuard]
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
