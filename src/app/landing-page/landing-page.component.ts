import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  profilePicture = {
    'background-image': 'url("https://chiamataxilatina.it/wp-content/uploads/2016/09/man-silhouette-clip-art-5219.jpg")',
  } 

}
