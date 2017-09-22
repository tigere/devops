import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'signin-comp',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  ngOnInit() {
    $('.ui.button').on('click', function() {
      alert("click submit.");
    });
  }

}
