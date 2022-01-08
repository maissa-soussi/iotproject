import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iotproject';
  vs=false;

  appear(){
    this.vs=true;
  }
  disappear(){
    this.vs=false;
  }
  
}
