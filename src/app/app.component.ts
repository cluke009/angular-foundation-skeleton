import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Foundation } from 'node_modules/foundation-sites/js/foundation';
// import { Accordion } from 'node_modules/foundation-sites/js/foundation.accordion';
// import { Slider } from 'node_modules/foundation-sites/js/foundation.slider';
// import { Tabs } from 'node_modules/foundation-sites/js/foundation.tabs';

// import { Foundation } from 'node_modules/foundation-sites/dist/js/foundation.es6';


// declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {

    var elem = new Foundation.Tabs($('#example-tabs'));
    var elem = new Foundation.Slider($('.slider'));
    var elem = new Foundation.Accordion($('.accordion'));

    Foundation.addToJquery($);
    // $(document).foundation();

    console.log('init');
  }
  title = 'angular-app';
  toggleTitle() {
    $('.title').slideToggle(); //
  }
}
