import {Component, OnInit, Input} from '@angular/core';
import {UserInfo} from "../../model/userInfo";
import {Router, ParamMap, ActivatedRoute} from "@angular/router";
import {UserInfoService} from "../../service/UserInfoService";

@Component({
  selector: 'welcome-comp',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userInfo: UserInfo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userInfoService: UserInfoService
  ) {}

  ngOnInit(): void {
    // this.userInfo = this.route.paramMap
    //   .switchMap((params: ParamMap) => {
    //     // (+) before `params.get()` turns the string into a number
    //     alert(params.get('userInfo'));
    //
    //   });

    this.userInfo = this.userInfoService.getUserInfo();

  }

}
