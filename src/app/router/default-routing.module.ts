import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {WelcomeComponent} from "../common/welcome/welcome.component";
import {BrowseComponent} from "../common/browse/browse.component";
import {DefaultComponent} from "../common/default/default.component";

const routers: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {path:'', component: WelcomeComponent },
      {path:'welcome', component: WelcomeComponent },
      {path:'browse', component: BrowseComponent }
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
