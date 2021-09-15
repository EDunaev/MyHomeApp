import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IncomeService } from 'src/app/services/income.service';
import { OutputService } from 'src/app/services/output.service';
import { IncomeTO } from 'src/app/TOs/IncomeTO';
import { MonthEntryTO } from 'src/app/TOs/MonthEntryTO';
import { OutputTO } from 'src/app/TOs/OutputTO';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-main-desk',
  templateUrl: './main-desk.component.html',
  styleUrls: ['./main-desk.component.css']
})
export class MainDeskComponent implements OnInit {

  @Input() month: MonthEntryTO;
  incomes: IncomeTO[] = [];
  outputs: OutputTO[] = [];
  displayedColumns: string[] = ['person', 'income'];
  constructor(
    private incomeService: IncomeService,
    private outputService: OutputService) { }

  ngOnInit(): void {
    this.findAllIncomes();
    this.findAllOutputs();
    // console.log(this.incomes);
    // console.log(this.outputs);
  }


  findAllIncomes() {
    this.incomeService.findIncomesByMonthId(this.month.id).subscribe(data => {
      if (!Array.isArray(data)) {
        data = [data];
      }
      this.parseIncomes(data);
    }, err => {
      if(err.status != 404){
        console.error(err);
      }
    });

  }

  parseIncomes(data: any) {

    data.forEach((element: any) => {
      this.incomes.push(IncomeTO.create(element));
    });
  }

  findAllOutputs() {
    this.outputService.findOutputsByMonthId(this.month.id).subscribe(data => {
      if (!Array.isArray(data)) {
        data = [data];
      }
      this.parseOutputs(data);
    }, err => {
      if(err.status != 404){
        console.error(err);
      }
    });
  }

  parseOutputs(data: any) {
    data.forEach((element: any) => {
      this.outputs.push(OutputTO.create(element));
    });
  }

  saveOrUpdateIncome(income: IncomeTO){
    console.log(income.income);
    this.incomeService.updateIncome(income).subscribe();
    console.log(this.incomes);
  }

}
