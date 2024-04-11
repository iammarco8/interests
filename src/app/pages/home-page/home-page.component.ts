import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  interests=[
    {name:"Games", description:"Spare time keeper. Have not played", image:"/assets/R.jpg"},
    {name:"Movies", description:"Spare time keeper. Have not seen any in months", image:"/assets/R (1).jpg"},
    {name:"Web Dev", description:"main means of income. Have not anything in months", image:"/assets/webdev.jpg"}
  ]
}
