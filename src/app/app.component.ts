import { Component } from '@angular/core';
import * as jquery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isItemsRoute=false
  title = 'Med';
  ngOnInit() {
               //Toggle Click Function
               jquery("#menu-toggle").click(function(e) {
     e.preventDefault();
     jquery("#wrapper").toggleClass("toggled");
   });
 }
 showItemsParamsRoute():void{
if (this.isItemsRoute == false) {
  this.isItemsRoute = true;
}else{
  if (this.isItemsRoute == true) {
    this.isItemsRoute = false;
  }
}
 }
}
