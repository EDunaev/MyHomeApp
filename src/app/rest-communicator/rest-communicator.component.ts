import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { WindelschichtService } from '../services/windelschicht.service';

@Component({
  selector: 'app-rest-communicator',
  templateUrl: './rest-communicator.component.html',
  styleUrls: ['./rest-communicator.component.css']
})
export class RestCommunicatorComponent  {


  posts: any[];
  constructor(private windelschichtService: WindelschichtService) { 
    this.findAllShifts();
  }

  parent(value: number) {
    if(value === 1) {
      return "Papa";
    }
    else
    {
      return "Mama";
    } 
  }

  adjustedDate(value)
  {
    return value.dayOfMonth + "-" + value.month + "-" + value.year;
  }

  findAllShifts() {
    this.windelschichtService.findAllShifts().subscribe(data => this.posts = data);
  }

  papa() {
    this.windelschichtService.papa().subscribe(data => this.posts.push(data));
  }
  mama() {
    this.windelschichtService.mama().subscribe(data => this.posts.push(data));
  }

}
