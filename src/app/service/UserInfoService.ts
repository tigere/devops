/**
 * Created by Administrator on 2017/9/27.
 */

import { Injectable } from '@angular/core';
import {UserInfo} from "../model/userInfo";

@Injectable()
export class UserInfoService {

  userInfo: UserInfo;

  getUserInfo() { return this.userInfo; }

  setUserInfo(userInfo: UserInfo) { this.userInfo = userInfo; }

}
