import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  galery: boolean = false;

  images: string[] = [
    "../../assets/galery/1.jpg",
    "../../assets/galery/2.jpg",
    "../../assets/galery/3.jpg",
    "../../assets/galery/4.jpg",
    "../../assets/galery/5.jpg",
    "../../assets/galery/6.jpg",
    "../../assets/galery/7.jpg",
    "../../assets/galery/8.jpg",
    "../../assets/galery/9.jpg",
    "../../assets/galery/10.jpg",
    "../../assets/galery/11.jpg",
    "../../assets/galery/12.jpg",
  ];

  currentImage: string = "";
  openGalery(event):  void {
    console.log(event)
    this.galery = true;
    this.currentImage = event.target.src;
  }

  toRight(): void {

  }

}
