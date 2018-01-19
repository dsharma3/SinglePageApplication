import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html' ,
  styles: []
})
export class ContactusComponent implements OnInit {

    public name: string = "";
    public message: string = "";
 
  constructor() { }

  ngOnInit() {
  }


  saveContactUsInfo = function () {    
      this.name = "";
  }   

  isDisabled = function () {   
       return !(name != "" || name!=undefined)
  }
}
