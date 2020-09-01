import { Component, OnInit } from '@angular/core';
import { WindelschichtService } from '../services/windelschicht.service';

@Component({
  selector: 'app-rest-communicator',
  templateUrl: './rest-communicator.component.html',
  styleUrls: ['./rest-communicator.component.css']
})
export class RestCommunicatorComponent  {


  posts: any[];
  selectedId: Number;
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

  onDelete(post) {
    this.windelschichtService.delete(post.id).subscribe(res => {
      var result: Boolean;
      res === 'true' ? result = true: result = false; 
      if(result) {
        console.log("Entity " + post.id + " was deleted");
        var index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }
      else{
        console.log("Entity " + post.id + " was not deleted");
      }
    });
  }

  selectedPost(id: number) {
    this.selectedId = id;
  }

  isPostSelected(id: number) {
    return this.selectedId === id;
  }

}
