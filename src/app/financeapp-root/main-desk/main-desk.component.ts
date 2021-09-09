import { Component, Input, OnInit } from '@angular/core';
import { MonthEntryTO } from 'src/app/TOs/MonthEntryTO';

@Component({
  selector: 'app-main-desk',
  templateUrl: './main-desk.component.html',
  styleUrls: ['./main-desk.component.css']
})
export class MainDeskComponent implements OnInit {

  @Input() month: MonthEntryTO;
  
  constructor() { }

  ngOnInit(): void {
  }

}
