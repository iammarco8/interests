import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent {
  phone: string = "Contact me at: 1-876-506-4006";
  email: string = "Or Email me: marco.duhaney2023@gmail.com";

  display= false; // this equal sign stopped me all day..

  showContact():void{
    this.display = true
  }
  hideit():void{
    this.display = false
  }
}
