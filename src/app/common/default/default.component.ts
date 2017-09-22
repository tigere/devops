import {Component, OnInit} from '@angular/core';
import {UserInfo} from "../../model/userInfo";

@Component({
  selector: 'default-comp',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  userInfo: UserInfo;

  ngOnInit(): void {
    // this.userInfo = {
    //   id: 1,
    //   name: "Tiger",
    //   headUrl: "https://semantic-ui.com/images/avatar/small/matt.jpg",
    //   admin: false
    // };

    // this.router.navigate(['/signin']);
    // using context

  }

}
