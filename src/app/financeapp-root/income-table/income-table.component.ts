import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IncomeTO } from 'src/app/TOs/IncomeTO';


@Component({
  selector: 'income-table',
  templateUrl: './income-table.component.html',
  styleUrls: ['./income-table.component.css']
})
export class IncomeTableComponent implements OnInit{

  @Input() incomes: IncomeTO[];
  @Output() newItemEvent = new EventEmitter<IncomeTO>();

  displayedColumns: string[] = ['Person', 'Income'];
  selectedIncome: IncomeTO;

  constructor() { }
 
  ngOnInit(): void {
  }

  getTotalCost() {
    return this.incomes.map(t => t.income).reduce((acc, value) => acc + value, 0);
  }

  selectIncome(income: IncomeTO) {
    this.selectedIncome = income;
  }

  isIncomeSelected(id: number) {
    return this.selectedIncome && id === this.selectedIncome.id;
  }

  changeIncome(event: any) {
    const value = event.target.value;
    if(!isNaN(parseFloat(value)) && !isNaN(value - 0)){
      this.selectedIncome.income = +event.target.value;
      this.newItemEvent.emit(this.selectedIncome);
      this.selectedIncome = null;
    }
    
  }
}

