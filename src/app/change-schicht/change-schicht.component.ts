import { Component, OnInit } from '@angular/core';
import { MonthEntryService } from '../services/month-entry.service';
import { MonthEntryTO } from '../TOs/MonthEntryTO';

@Component({
  selector: 'app-change-schicht',
  templateUrl: './change-schicht.component.html',
  styleUrls: ['./change-schicht.component.css']
})
export class ChangeSchichtComponent implements OnInit {


  isActivated: boolean = true;
  textSomething: String = 'the should be something';
  

  monthEntries: MonthEntryTO[] = [];
  constructor(private monthEntryService: MonthEntryService) {


    setTimeout(() => {
      this.isActivated = false;
    }, 2000);
  }



  makeSomeText() {
    this.textSomething = 'text is there';
  }

  setSomeText(event: any) {
    this.textSomething = event.target.value;
  }










  ngOnInit(): void {
    this.findAllEntries();
    console.log(this.monthEntries);
  }

  findAllEntries() {
    this.monthEntryService.findAllMonthEntries().subscribe(data => {
      this.parseDataList(data);
    });
  }

  parseDataList(data: any) {
    data.forEach((element: any) => {
      this.monthEntries.push(MonthEntryTO.create(element));
    });
  }












}
