import { Component } from '@angular/core';
import { WindelschichtService } from '../services/windelschicht.service';
import { SchichtTO } from '../TOs/SchichtTO';

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.css']
})
export class ContentTableComponent  {


  posts: SchichtTO[] = [];
  selectedSchicht: SchichtTO;
  constructor(private windelschichtService: WindelschichtService) { 
    this.findAllShifts();
  }

  findAllShifts() {
    this.windelschichtService.findAllShifts().subscribe(data => this.parseData(data));
  }

  papa() {
    this.windelschichtService.papa().subscribe(data => this.parseData(data));
  }
  mama() {
    this.windelschichtService.mama().subscribe(data => this.parseData(data));
  }

  onDelete(post: SchichtTO) {
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

  parseData(data: any) {
    data.forEach(element => {
      this.posts.push(SchichtTO.create(element));
    });
  }

  selectedPost(selectedSchicht: SchichtTO) {
    this.selectedSchicht = selectedSchicht;
  }

  isPostSelected(id: number) {
    return this.selectedSchicht && this.selectedSchicht.id === id;
  }

}
