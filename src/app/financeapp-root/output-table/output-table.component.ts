import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OutputTO } from 'src/app/TOs/OutputTO';
import { CreateOutputDialogComponent } from '../create-output-dialog/create-output-dialog.component';

@Component({
  selector: 'output-table',
  templateUrl: './output-table.component.html',
  styleUrls: ['./output-table.component.css']
})
export class OutputTableComponent implements OnInit {

  @Input() outputs: OutputTO[];
  @Output() newItemEvent = new EventEmitter<OutputTO>();
  displayedColumns: string[] = ['Name', 'Item Type', 'Price', 'Command'];
  selectedOutput: OutputTO;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  selectOutput(output: OutputTO) {
    console.log(output);

    this.selectedOutput = output;
  }
  setAsPaid(output: OutputTO) {
    output.isPaid = true;
    this.newItemEvent.emit(output);
  }
  saveOrUpdateOutput(event: any) {

  }

  getTotalCost() {
    return this.outputs.filter(i => !i.isPaid).map(t => t.entryPrice).reduce((acc, value) => acc + value, 0);
  }

  isOutputSelected(id: number) {
    return this.selectedOutput && this.selectedOutput.id === id;
  }

  openDialog(output: OutputTO) {
    const dialogRef = this.dialog.open(CreateOutputDialogComponent, {
      width: '300px',

      data: OutputTO.create(output)
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        output.setValues(result);
        this.newItemEvent.emit(output);
      }

    });
  }

}
