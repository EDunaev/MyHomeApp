import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OutputTO } from 'src/app/TOs/OutputTO';
import { CreateOutputDialogComponent } from '../create-output-dialog/create-output-dialog.component';

@Component({
  selector: 'output-table',
  templateUrl: './output-table.component.html',
  styleUrls: ['./output-table.component.css']
})
export class OutputTableComponent implements OnInit, OnChanges {

  @Input() outputs: OutputTO[];
  @Output() newItemEvent = new EventEmitter<OutputTO>();
  @Output() fillMonthEvent = new EventEmitter<OutputTO>();
  displayedColumns: string[] = ['Name', 'Type', 'Preis', 'Handlung'];
  selectedOutput: OutputTO;
  showAllOutputsButton: boolean = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("from onChanges");
    console.log(changes);
  }


  selectOutput(output: OutputTO) {
    this.selectedOutput = output;
  }
  setAsPaid(output: OutputTO) {
    output.isPaid = true;
    this.newItemEvent.emit(output);
  }

  getTotalCost() {
    if(this.showAllOutputsButton) {
      return this.outputs.map(t => t.entryPrice).reduce((acc, value) => acc + value, 0);
    }
    return this.outputs.filter(i => !i.isPaid).map(t => t.entryPrice).reduce((acc, value) => acc + value, 0);
    
  }

  isOutputSelected(id: number) {
    return this.selectedOutput && this.selectedOutput.id === id;
  }

  openChangeDialog(output: OutputTO) {
    const dialogRef = this.dialog.open(CreateOutputDialogComponent, {
      width: '300px',

      data: OutputTO.create(output)
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);

        output.setValues(result);
        this.newItemEvent.emit(output);
      }

    });
  }

  filteredOutputs() {
    if(this.showAllOutputsButton) {
      return this.outputs;
    }
    else {
      return this.outputs.filter(o => !o.isPaid); 
    }
  }

  openCreatenDialog() {
    const newOtuput: OutputTO = new OutputTO();
    this.openChangeDialog(newOtuput);
  }

  getButtonName() {
    if(this.showAllOutputsButton) {
      return 'Bezahlte Ausgaben Ausblenden';
    }
    else {
      return 'Alle Ausgaben Anzeigen';
    }
  }
}
