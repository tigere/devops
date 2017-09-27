import {Component, OnInit, Input} from '@angular/core';
import {UserInfo} from "../../model/userInfo";
import {ActivatedRoute, Router} from "@angular/router";
import {UserInfoService} from "../../service/UserInfoService";

@Component({
  selector: 'users-comp',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userInfo: UserInfo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userInfoService: UserInfoService
  ) {}


  ngOnInit(): void {
    this.userInfo = this.userInfoService.getUserInfo();

    $('.ui.users-an .card.manager').click(function (event) {
      var _con = $(this);
      (<any> _con).transition('scale in'); // fade up
    });
    $('.ui.users-an .card.product').click(function (event) {
      var _con = $(this);
      (<any> _con).transition('horizontal flip in'); // vertical
    });
    $('.ui.users-an .card.test').click(function (event) {
      var _con = $(this);
      (<any> _con).transition('drop in');
    });
    $('.ui.users-an .card.design').click(function (event) {
      var _con = $(this);
      (<any> _con).transition('fly right in'); // swing up; browse
    });
    $('.ui.users-an .card.app').click(function (event) {
      var _con = $(this);
      (<any> _con).transition('slide down in'); // browse
    });
    $('.ui.users-an .card.engineer').click(function (event) {
      var _con = $(this);
      (<any> _con).transition('jiggle in'); //jiggle; flash ; shake; pulse; tada; bounce
    });

  }

}
