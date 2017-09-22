import {Component, OnInit, Input} from '@angular/core';
import {UserInfo} from "../../model/userInfo";
import {Router, ParamMap, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'welcome-comp',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @Input() userInfo: UserInfo;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.userInfo = this.route.paramMap
    //   .switchMap((params: ParamMap) => {
    //     // (+) before `params.get()` turns the string into a number
    //     alert(params.get('userInfo'));
    //
    //   });
  }

}
