import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rakesh Proj';
  clickVal = '';

  GetData(){
    this.clickVal = 'clicked';
  }
}
