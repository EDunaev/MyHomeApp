import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IncomeService } from 'src/app/services/income.service';
import { OutputService } from 'src/app/services/output.service';
import { IncomeTO } from 'src/app/TOs/IncomeTO';
import { MonthEntryTO } from 'src/app/TOs/MonthEntryTO';
import { OutputTO } from 'src/app/TOs/OutputTO';

@Component({
  selector: 'app-main-desk',
  templateUrl: './main-desk.component.html',
  styleUrls: ['./main-desk.component.css']
})
export class MainDeskComponent implements OnInit {

  @Input() month: MonthEntryTO;
  @Output() newItemEvent = new EventEmitter<MonthEntryTO>();
  incomes: IncomeTO[] = [];
  outputs: OutputTO[] = [];
  displayedColumns: string[] = ['person', 'income'];
  constructor(
    private incomeService: IncomeService,
    private outputService: OutputService) { }

  ngOnInit(): void {
    this.findAllIncomes();
    this.findAllOutputs();
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
    this.incomeService.updateIncome(income).subscribe();
    this.updateMonthEntry();
  }

  saveOrUpdateOutput(output: OutputTO){
    console.log(output.name + " is paid? " + output.isPaid);
    if(output.monthEntryId) {
      this.outputService.updateOutput(output).subscribe();
    }
    else {
      output.monthEntryId = this.month;
      this.outputService.saveOutput(output).subscribe();
    }
    //todo: add only new elements if necessary 
    // this.findAllOutputs();
    this.updateMonthEntry();
  }

  updateMonthEntry() {
    console.log(this.outputs);
    
    const income: number = this.incomes.map(t => t.income).reduce((acc, value) => acc + value, 0);
    const realIncome: number = this.incomes.map(t => t.realIncome).reduce((acc, value) => acc + value, 0);
    const outcome: number = this.outputs.filter(i => !i.isPaid).map(t => t.entryPrice).reduce((acc, value) => acc + value, 0);

    console.log("income " + income);
    console.log("realIncome " + realIncome);
    console.log("outcome " + outcome);

    console.log("income - outcome " + (income - outcome));
    console.log("realIncome - outcome " + (realIncome - outcome));
    
    this.month.expectedState = Number((income - outcome).toFixed(2));
    this.month.actualState = Number((realIncome - outcome).toFixed(2));
    this.month.realState = Number((realIncome - outcome).toFixed(2));

    this.newItemEvent.emit(this.month);

  }

}
