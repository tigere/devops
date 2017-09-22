import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./router/app-routing.module";
import {SigninComponent} from "./common/signin/signin.component";
import {SignupComponent} from "./common/signup/signup.component";
import {PageNotFoundComponent} from "./common/pnf/pnf.component";
import {DefaultModule} from "./module/default.module";

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    DefaultModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
