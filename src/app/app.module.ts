import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./router/app-routing.module";
import {SigninComponent} from "./common/signin/signin.component";
import {SignupComponent} from "./common/signup/signup.component";
import {PageNotFoundComponent} from "./common/pnf/pnf.component";
import {DefaultModule} from "./module/default.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UserInfoService} from "./service/UserInfoService";

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
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
