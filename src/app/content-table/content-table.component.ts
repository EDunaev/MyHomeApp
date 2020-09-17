import { Component, OnInit } from '@angular/core';
import { WindelschichtService } from '../services/windelschicht.service';
import { SchichtTO } from '../TOs/SchichtTO';
import * as _ from 'lodash'; 

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.css']
})
export class ContentTableComponent implements OnInit{

  isOpen: Boolean;
  posts: SchichtTO[] = [];
  selectedPosts: SchichtTO[] = [];
  selectedSchicht: SchichtTO;

  constructor(private windelschichtService: WindelschichtService) { }
  
  
  ngOnInit(): void {
    this.findAllShifts();
  }

  findAllShifts() {
    this.windelschichtService.findAllShifts().subscribe(data => {
      this.parseDataList(data);
      this.refreshTableView();
    });
  }

  papa() {
    this.windelschichtService.papa().subscribe(data => {
      this.parseData(data);
      this.refreshTableView();
    });
  }
  mama() {
    this.windelschichtService.mama().subscribe(data => {
      this.parseData(data);
      this.refreshTableView();
    });
  }

  onDelete(post: SchichtTO) {
    this.windelschichtService.delete(post.id).subscribe(
      res => {
        if(res) {
          console.log("Entity " + post.id + " was deleted");
          var index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
          this.refreshTableView();
        }
        else{
          console.log("Entity " + post.id + " was not deleted");
        }
      },
      error => console.log("Error: ", error)
      );
  }

  onChange(post: SchichtTO) {
    console.log("tbd");
    
  }

  parseDataList(data: any) {
    data.forEach((element: any) => {
      this.parseData(element);
    });
  }

  parseData(data: any) {
      this.posts.push(SchichtTO.create(data));
  }

  selectedPost(selectedSchicht: SchichtTO) {
    this.selectedSchicht = selectedSchicht;
  }

  isPostSelected(id: number) {
    return this.selectedSchicht && this.selectedSchicht.id === id;
  }

  collapseExpand() {
    this.isOpen = !this.isOpen;
    	this.refreshTableView();
  }

  refreshTableView() {
    if(this.isOpen) {
      this.selectedPosts = this.posts;
    }
    else {
      this.selectedPosts = _.takeRight(this.posts, 5);
    }
  }

}
