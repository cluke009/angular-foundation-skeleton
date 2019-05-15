import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Foundation } from 'node_modules/foundation-sites/js/foundation';

@Component({
  selector: 'app-kitchensink',
  templateUrl: './kitchensink.component.html',
  styleUrls: ['./kitchensink.component.scss']
})
export class KitchensinkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
        // Trick TypeScript into attaching foundation() and compiling properly
        Foundation.addToJquery($);
        (<any>$(document)).foundation();
  }

}
