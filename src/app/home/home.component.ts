import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photos: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.photos = [
      {"id": 1, "category":"family", "caption": "Purple Sunset", "url": "assets/img/IMG_20200825_185126.jpg"},
      {"id": 2, "category":"family", "caption": "Purple Sunset", "url": "assets/img/IMG_20200827_163023.jpg"},
      {"id": 4, "category":"family", "caption": "Purple Sunset", "url": "assets/img/IMG_20200907_174634.jpg"},
      {"id": 5, "category":"family", "caption": "Purple Sunset", "url": "assets/img/IMG_20200913_104610.jpg"}
    ];
  }

}
