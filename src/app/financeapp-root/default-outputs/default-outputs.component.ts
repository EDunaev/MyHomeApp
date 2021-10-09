import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { OutputService } from 'src/app/services/output.service';
import { OutputTO } from 'src/app/TOs/OutputTO';
import { CreateOutputDialogComponent } from '../create-output-dialog/create-output-dialog.component';

@Component({
  selector: 'default-outputs',
  templateUrl: './default-outputs.component.html',
  styleUrls: ['./default-outputs.component.css']
})
export class DefaultOutputsComponent implements OnInit {

  isTest: boolean = false;
  outputs: OutputTO[] = [];
  displayedColumns: string[] = ['Name', 'Type', 'Preis'];
  constructor(
    private outputService: OutputService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.outputService.findOutputsByMonthId(0).subscribe(data => {
      this.handleOutputResponse(data);
    });
    this.route.params.subscribe(parameter => {
      this.isTest = parameter.mode === 'test';
    })
  }

  parseOutputs(data: any) {
    data.forEach((element: any) => {
      this.outputs.push(OutputTO.create(element));
    });
    this.outputs = this.outputs.sort(((a, b) => (a.entryPrice > b.entryPrice ? -1 : 1)));
  }

  backToFinance() {
    this.router.navigateByUrl('/finances');
  }

  openChangeDialog(output: OutputTO, changeOutput: boolean) {
    const dialogRef = this.dialog.open(CreateOutputDialogComponent, {
      width: '300px',

      data: OutputTO.create(output)
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        output.setValues(result);
        if (!this.isTest) {
          this.outputService.saveOutput(result).subscribe(data => {
            if (changeOutput) {
              this.handleOutputResponse(data);
            }
          });
        }
        else {
          if(!this.outputs.includes(output)) {
            this.handleOutputResponse(output);
          }
        }
      }
    });
  }

  handleOutputResponse(data: any) {
    if (!Array.isArray(data)) {
      data = [data];
    }
    this.parseOutputs(data);
  }

  openCreatenDialog() {
    const newOtuput: OutputTO = new OutputTO();
    this.openChangeDialog(newOtuput, true);
  }

  getTotalCost() {
    return this.outputs.filter(i => !i.isPaid).map(t => t.entryPrice).reduce((acc, value) => acc + value, 0);
  }

  deleteOutput(id: number) {
    if (!this.isTest) this.outputService.deleteOutput(id).subscribe();
    this.outputs = this.outputs.filter(o => o.id !== id).sort(((a, b) => (a.entryPrice > b.entryPrice ? -1 : 1)));
  }
}
