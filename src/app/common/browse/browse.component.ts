import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'browse-comp',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  ngOnInit(): void {
    // $('.ui.browse-an .card').mouseenter(function (event) {
    //   console.log(event);
    //     var _con = $(this);
    //     (<any> _con).transition({
    //         animation  : 'horizontal flip in',
    //         duration   : '1s',
    //         onComplete : function() {
    //           // alert('done');
    //         },
    //         onStart: function () {
    //           _con.stop();
    //         }
    //     }).stop();
    // });
    $('.ui.browse-an .card.manager').click(function (event) {
      var _con = $(this);
      (<any> _con).transition('scale in'); // fade up
    });
    $('.ui.browse-an .card.product').click(function (event) {
      var _con = $(this);
      (<any> _con).transition('horizontal flip in'); // vertical
    });
    $('.ui.browse-an .card.test').click(function (event) {
      var _con = $(this);
      (<any> _con).transition('drop in');
    });
    $('.ui.browse-an .card.design').click(function (event) {
      var _con = $(this);
      (<any> _con).transition('fly right in'); // swing up; browse
    });
    $('.ui.browse-an .card.app').click(function (event) {
      var _con = $(this);
      (<any> _con).transition('slide down in'); // browse
    });
    $('.ui.browse-an .card.engineer').click(function (event) {
      var _con = $(this);
      (<any> _con).transition('jiggle in'); //jiggle; flash ; shake; pulse; tada; bounce
    });

  }

}
