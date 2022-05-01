import { Component, OnInit } from '@angular/core';
import { MonthEntryService } from '../services/month-entry.service';
import { MonthEntryTO } from '../TOs/MonthEntryTO';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-financeapp-root',
  templateUrl: './financeapp-root.component.html',
  styleUrls: ['./financeapp-root.component.css']
})
export class FinanceappRootComponent implements OnInit {

  monthEntries: MonthEntryTO[][] = [[], [], []];
  monthEntriesNew: MonthEntryTO[] = [];
  rowCounter: number;
  columnNumber: number = 4;
  
  constructor(
    private monthEntryService: MonthEntryService,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    this.findAllEntries();
    console.log(this.monthEntriesNew);
  }


  findAllEntries() {
    this.monthEntryService.findAllMonthEntries().subscribe(data => {
    //  this.parseMonthEntires(data);
      this.parseMonthEntriesNew(data);
    });
  }

  parseMonthEntires(data: any) {
    data.forEach((element: any) => {
      switch (element.entryYear) {
        case 2021: {
          this.monthEntries[0].push(MonthEntryTO.create(element));
          break;
        }
        case 2022: {
          this.monthEntries[1].push(MonthEntryTO.create(element));
          break;
        }
        default: {
          this.monthEntries[2].push(MonthEntryTO.create(element));
          break;
        }
      }
    });
  }

  parseMonthEntriesNew(data: any) {
    let counter: number = 0;
    this.rowCounter = 1;
    data.forEach((element: any) => {
      counter++;
      let month: MonthEntryTO = MonthEntryTO.create(element);
      month.lineNumber = this.rowCounter;
      this.monthEntriesNew.push(month);

      if(counter%this.columnNumber === 0) {
        counter = 0;
        this.rowCounter++;
      }

    });
  }
  getEntriesForRow(rowNumber: number) {
    return this.monthEntriesNew.filter(entry => entry.lineNumber === rowNumber);
  }

  saveOrUpdateMonth(month: MonthEntryTO) {
    this.monthEntryService.updateMonthEntry(month).subscribe();

  }

  fillMonth(id: number) {
    this.monthEntryService.fillMonthEntry(id).subscribe();
  }

  showOutputs() {
    this.router.navigateByUrl('/outputs/standard');
  }

  showOutputsTesting() {
    this.router.navigateByUrl('/outputs/test');
  }

  getmonthAndYear(month: MonthEntryTO): String {
    return month.entryMonth + '/' + month.entryYear;
  }

}
