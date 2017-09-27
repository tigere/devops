import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'navigate-comp',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  ngOnInit(): void {
    (<any> $('.ui.accordion'))
      .accordion({
        selector: {
          trigger: '.title '
        },
        exclusive: false
      })
    ;
  }

}
