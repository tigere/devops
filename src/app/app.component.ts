import {Component, OnInit} from '@angular/core';
import {UserInfo} from "./model/userInfo";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userInfo: UserInfo;

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

}
