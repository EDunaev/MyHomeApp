import { Component, OnInit, Output } from '@angular/core';
import { IncomeService } from '../services/income.service';
import { MonthEntryService } from '../services/month-entry.service';
import { OutputService } from '../services/output.service';
import { IncomeTO } from '../TOs/IncomeTO';
import { OutputTO } from '../TOs/OutputTO';
import { MonthEntryTO } from '../TOs/MonthEntryTO';

@Component({
  selector: 'app-financeapp-root',
  templateUrl: './financeapp-root.component.html',
  styleUrls: ['./financeapp-root.component.css']
})
export class FinanceappRootComponent implements OnInit {

  monthEntries: MonthEntryTO[] = [];
  incomes: IncomeTO[] = [];
  outputs: OutputTO[] = [];
  constructor(
    private monthEntryService: MonthEntryService,
    private incomeService: IncomeService,
    private outputService: OutputService) { }

  ngOnInit(): void {
    this.findAllEntries();
    console.log(this.monthEntries);
  }


  findAllEntries() {
    this.monthEntryService.findAllMonthEntries().subscribe(data => {
      this.parseMonthEntires(data);
    });
  }

  parseMonthEntires(data: any) {
    data.forEach((element: any) => {
      this.monthEntries.push(MonthEntryTO.create(element));
    });
  }

  findAllIncomes() {
    this.incomeService.findAllIncomes().subscribe(data => {
      this.parseIncomes(data);
    });
  }

  parseIncomes(data: any) {
    data.forEach((element: any) => {
      this.incomes.push(IncomeTO.create(element));
    });
  }

  findAllOutputs() {
    this.outputService.findAllOutputs().subscribe(data => {
      this.parseOutputs(data);
    });
  }

  parseOutputs(data: any) {
    data.forEach((element: any) => {
      this.outputs.push(OutputTO.create(element));
    });
  }

  saveOrUpdateMonth(month: MonthEntryTO){
    this.monthEntryService.updateMonthEntry(month).subscribe();

  }
  
  getmonthAndYear(month: MonthEntryTO) : String {
    return month.entryMonth + '/' + month.entryYear;
}



}
