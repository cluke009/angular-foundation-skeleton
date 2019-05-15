import { Component } from '@angular/core';
import * as $ from 'jquery';
import { Foundation } from 'node_modules/foundation-sites/js/foundation';

@Component({
  selector: 'app-root',
  template: `
    <!-- header -->
    <app-header></app-header>

    <!-- routes will be rendered here -->
    <router-outlet></router-outlet>

    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  ngOnInit() {
    // Trick TypeScript into attaching foundation() and compiling properly
    Foundation.addToJquery($);
    (<any>$(document)).foundation();
  }
}
