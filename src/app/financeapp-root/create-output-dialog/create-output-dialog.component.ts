import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { OutputTO } from 'src/app/TOs/OutputTO';
import { CustomValidators } from 'src/app/validators/custom-validators';

@Component({
  selector: 'create-output-dialog',
  templateUrl: './create-output-dialog.component.html',
  styleUrls: ['./create-output-dialog.component.css']
})
export class CreateOutputDialogComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id: new FormControl({value: "", disabled: true}, CustomValidators.onlyNumberValidator ),
    name: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, CustomValidators.onlyNumberValidator]),
    comment: new FormControl(''),
    type: new FormControl('', Validators.required),
    isPaid: new FormControl(false)
  });

  constructor(
    public dialogRef: MatDialogRef<CreateOutputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public output: OutputTO) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClose() {
    this.dialogRef.close();
  }

  onSubmit() {

  }
  onSelectionChanged(value: any) {
    console.log(value);
    if (value === 'opt-1') {
      this.form.get('id').disable();
    } else {
      this.form.get('id').enable();
    }
  }
}
