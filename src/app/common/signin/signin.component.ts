import {Component, OnInit, Input} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'signin-comp',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  @Input() name: string;
  @Input() password: string;
  @Input() remember: boolean;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    $(document).ready(function () {
      (<any> $('.ui.form'))
        .form({
          fields: {
            email: {
              identifier: 'email',
              rules: [
                {type: 'empty', prompt: '请输入用户名或邮箱地址..'}
                // {type: 'email', prompt : '请输入正确的邮箱地址'}
              ]
            },
            password: {
              identifier: 'password',
              rules: [
                {type: 'empty', prompt: '请输入密码'},
                {type: 'length[6]', prompt: '密码长度必须六位及以上'}
              ]
            }
          }
        })
      ;
    });
  }

  signIn(): void {
    console.log(this.name + this.password + this.remember);

    var data = {
      name: this.name,
      password: this.password,
      remember: this.remember
    };

    var reqHeaders = new HttpHeaders();
    reqHeaders = reqHeaders
      // .set('content-type', 'application/json;charset=utf8')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'POST')
      .set('Access-Control-Allow-Headers', 'x-requested-with,content-type')
    ;

    this.http.post('http://localhost:8080/signin', data, {
      headers: reqHeaders,
      responseType: 'text'
    }).subscribe(
      data => {
        if (data === 'Yes') {
          this.setCookie('utoken', '1');

          this.router.navigate(['/']);
        }
      },
      error => {
        alert('error');
      },
      () => {
        // alert('complete');
      }
    );

  }

  setCookie(c_name: string, value:string, expiredays?:number) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    var ev = value;
    var ex = (expiredays==null) ? "" : ";expires="+exdate.toUTCString()
    document.cookie = encodeURI(c_name + "=" + ev + ex);
  }

  getCookie(c_name: string): string {
    if (document.cookie.length>0)
    {
      var c_start=document.cookie.indexOf(c_name + "=")
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
