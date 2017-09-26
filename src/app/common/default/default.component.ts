import {Component, OnInit, Input} from '@angular/core';
import {UserInfo} from "../../model/userInfo";
import {HttpClient} from "@angular/common/http";
import {unescape} from "querystring";

@Component({
  selector: 'default-comp',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  @Input() userInfo: UserInfo;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {

    console.log("=========In default===================");

    var ui = this.getCookie('utoken');
    if (ui === '1') {
      this.userInfo = {
        id: 1,
        name: "Tiger",
        headUrl: "https://semantic-ui.com/images/avatar/small/matt.jpg",
        admin: false
      };
    }
  }

  getCookie(c_name: string): string {
    if (document.cookie.length>0)
    {
      var c_start=document.cookie.indexOf(c_name + "=");
      if (c_start!=-1)
      {
        c_start = c_start + c_name.length+1;
        var c_end=document.cookie.indexOf(";",c_start);
        if (c_end==-1) c_end=document.cookie.length;
        return document.cookie.substring(c_start,c_end);
      }
    }
    return ""
  }

}
