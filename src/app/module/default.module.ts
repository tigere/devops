import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {DefaultComponent} from "../common/default/default.component";
import {HeaderComponent} from "../common/header/header.component";
import {WelcomeComponent} from "../common/welcome/welcome.component";
import {BrowseComponent} from "../common/browse/browse.component";
import {DefaultRoutingModule} from "../router/default-routing.module";
import {UsersComponent} from "../common/users/users.component";
import {NavigateComponent} from "../common/navigate/navigate.component";

@NgModule({
  declarations: [
    DefaultComponent,
    HeaderComponent,
    WelcomeComponent,
    BrowseComponent,
    UsersComponent,
    NavigateComponent
  ],
  imports: [
    BrowserModule,
    DefaultRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class DefaultModule { }
