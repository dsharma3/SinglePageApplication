import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  styles: []
})
export class MenuComponent implements OnInit {
    location: Location;
    constructor(location: Location) { this.location = location; }

  ngOnInit() {
  }
  public getClass = function (path) {      
      return (this.location.path().substr(0, path.length) === path) ? 'active' : '';
  }
}
