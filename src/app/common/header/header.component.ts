import {Component, Input, OnInit} from '@angular/core';
import {UserInfo} from "../../model/userInfo";
import {Router} from "@angular/router";

@Component({
  selector: 'header-comp',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() userInfo: UserInfo;

  constructor(private router: Router) {}

  ngOnInit(): void {

    (<any> $('.ui.sidebar'))
      .sidebar({
        context: $('.bottom.segment'),
        closable: false,
        dimPage: false,
      })
      .sidebar('attach events', '.menu .sidebar')
    ;

    (<any> $('.ui.accordion'))
      .accordion({
        selector: {
          trigger: '.title '
        },
        exclusive: false
      })
    ;

    // this.router.navigate(['welcome']);

  }


  click(target: string): void {
    console.log("======" + target);
    if (target === "login") {
      this.router.navigateByUrl("/signin");
    }
    else if (target === "home") {
      this.router.navigate([""]);
    }
    else if (target === "browse") {
      // this.router.navigate(["/signin"]);
      this.router.navigate(['/browse']);

    }

    else if (target === "signout") {
      document.cookie = "utoken=0;";

      this.userInfo = null;
    }
  }

}
