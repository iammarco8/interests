import { Component } from '@angular/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent {
  request: any={};
  requests: any[]= []

  addrequest(){
    this.request.push({...this.request});
    this.request = {}
  }
}
