import { Component } from '@angular/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent {
  request: any={};
  requests: any[]= []
  // requests: string[]= []

  addrequest(){
    this.requests.push({...this.request});
    this.request = {};
    console.log(this.requests);
  }
}
