import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  template: `
    <p>
      aboutus works!
    </p>
  `,
  styles: ["../node_modules/bootstrap/dist/css/bootstrap.min.css"]
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
