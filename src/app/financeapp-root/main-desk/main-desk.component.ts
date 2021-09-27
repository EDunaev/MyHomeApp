import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IncomeService } from 'src/app/services/income.service';
import { MonthEntryService } from 'src/app/services/month-entry.service';
import { OutputService } from 'src/app/services/output.service';
import { IncomeTO } from 'src/app/TOs/IncomeTO';
import { MonthEntryTO } from 'src/app/TOs/MonthEntryTO';
import { OutputTO } from 'src/app/TOs/OutputTO';

@Component({
  selector: 'app-main-desk',
  templateUrl: './main-desk.component.html',
  styleUrls: ['./main-desk.component.css']
})
export class MainDeskComponent implements OnInit, OnChanges {

  @Input() month: MonthEntryTO;
  @Output() newItemEvent = new EventEmitter<MonthEntryTO>();
  @Output() fillMonthEvent = new EventEmitter<number>();
  isAuctualStateEditable: boolean = false;
  incomes: IncomeTO[] = [];
  outputs: OutputTO[] = [];
  displayedColumns: string[] = ['person', 'income'];
  constructor(
    private incomeService: IncomeService,
    private outputService: OutputService,
    private monthService: MonthEntryService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("from main-dest");
    console.log(changes);


  }

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
      if (err.status != 404) {
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
      this.handleOutputResponse(data);
    }, err => {
      if (err.status != 404) {
        console.error(err);
      }
    });
  }

  handleOutputResponse(data: any) {
    if (!Array.isArray(data)) {
      data = [data];
    }
    this.parseOutputs(data.sort(((a, b) => (a.entryPrice > b.entryPrice ? -1 : 1))))
  }

  parseOutputs(data: any) {
    data.forEach((element: any) => {
      this.outputs.push(OutputTO.create(element));
    });
  }

  saveOrUpdateIncome(income: IncomeTO) {
    //todo 1. add function if income new; 2. update this.month.realState if income created/changed 
    this.incomeService.updateIncome(income).subscribe();
    this.updateMonthEntry();
  }

  saveOrUpdateOutput(output: OutputTO) {
    console.log(output.name + " is paid? " + output.isPaid);
    if (output.monthEntryId) {
      this.outputService.updateOutput(output).subscribe();
    }
    else {
      output.monthEntryId = this.month;
      this.outputService.saveOutput(output).subscribe(data => {
        this.handleOutputResponse(data);
      }, err => {
        if (err.status != 404) {
          console.error(err);
        }
      });
    }
    this.updateMonthEntry();
  }

  realWithActualStates() {
    return Number((this.month.realState + this.month.actualState).toFixed(2));
  }

  changeActualState(event: any) {

    const value = event.target.value;
    console.log(!isNaN(parseFloat(value)) && !isNaN(value - 0));

    if (!isNaN(parseFloat(value)) && !isNaN(value - 0)) {
      this.month.actualState = +value;
      this.newItemEvent.emit(this.month);
      this.isAuctualStateEditable = false;
    }
  }

  fillMonth() {

    // todo: find better solution for that 

    // this.fillMonthEvent.emit(this.month.id)
    // this.findAllOutputs();
    // console.log(this.month);
    // console.log(this.outputs);

    this.monthService.fillMonthEntry(this.month.id).subscribe(data => {
      if (data === true) {
        this.findAllOutputs();
        console.log(this.outputs);
      }
    });

  }

  updateMonthEntry() {
    console.log(this.outputs);

    const income: number = this.incomes.map(t => t.income).reduce((acc, value) => acc + value, 0);
    const realIncome: number = this.incomes.map(t => t.realIncome).reduce((acc, value) => acc + value, 0);
    const expectedOutcome: number = this.outputs.map(t => t.entryPrice).reduce((acc, value) => acc + value, 0);
    const realOutcome: number = this.outputs.filter(i => i.isPaid).map(t => t.entryPrice).reduce((acc, value) => acc + value, 0);

    console.log("income " + income);
    console.log("realIncome " + realIncome);
    console.log("outcome " + realOutcome);

    console.log("income - outcome " + (income - realOutcome));
    console.log("realIncome - outcome " + (realIncome - realOutcome));

    this.month.expectedState = Number((income - expectedOutcome).toFixed(2));
    // this.month.actualState = Number((realIncome - realOutcome).toFixed(2));
    //todo not always right calculation 
    this.month.realState = Number((realIncome - realOutcome).toFixed(2));

    this.newItemEvent.emit(this.month);

  }

}
