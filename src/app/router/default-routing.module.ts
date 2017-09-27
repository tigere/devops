import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {WelcomeComponent} from "../common/welcome/welcome.component";
import {BrowseComponent} from "../common/browse/browse.component";
import {DefaultComponent} from "../common/default/default.component";
import {UsersComponent} from "../common/users/users.component";
import {NavigateComponent} from "../common/navigate/navigate.component";

const routers: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {path:'', component: WelcomeComponent },
      {path:'welcome', component: WelcomeComponent },
      {path:'users', component: UsersComponent },
      {path:'browse', component: BrowseComponent },
      {path:'message', component: NavigateComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routers)
  ],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
