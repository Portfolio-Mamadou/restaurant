import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgHamburger = "assets/images/hamburger.jpg";
  imgPizza = "assets/images/pizza-mexique.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
