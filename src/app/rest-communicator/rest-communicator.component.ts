import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-rest-communicator',
  templateUrl: './rest-communicator.component.html',
  styleUrls: ['./rest-communicator.component.css']
})
export class RestCommunicatorComponent  {


  posts: any[];
  constructor(private http: Http) { 
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
    this.http.get('http://192.168.178.28:7070/jarsx-first/api/windel')
      .subscribe(response => {
        this.posts = response.json();
      })
  }

  papa() {
    this.http.get('http://192.168.178.28:7070/jarsx-first/api/windel/1')
    .subscribe(response => {
      this.findAllShifts();
    })
  }
  mama() {
    this.http.get('http://192.168.178.28:7070/jarsx-first/api/windel/2')
    .subscribe(response => {
      this.findAllShifts();
    })
  }


}
