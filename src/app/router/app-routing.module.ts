import { NgModule } from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {SignupComponent} from "../common/signup/signup.component";
import {SigninComponent} from "../common/signin/signin.component";
import {DefaultComponent} from "../common/default/default.component";
import {PageNotFoundComponent} from "../common/pnf/pnf.component";
import {NavigateComponent} from "../common/navigate/navigate.component";

const routers: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routers
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
