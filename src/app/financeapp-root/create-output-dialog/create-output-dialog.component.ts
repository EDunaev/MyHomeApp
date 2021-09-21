import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OutputTO } from 'src/app/TOs/OutputTO';
import { CustomValidators } from 'src/app/validators/custom-validators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'create-output-dialog',
  templateUrl: './create-output-dialog.component.html',
  styleUrls: ['./create-output-dialog.component.css']
})
export class CreateOutputDialogComponent implements OnInit {

  showIdField = environment.isDBLocal;
  form: FormGroup = new FormGroup({
    id: new FormControl({ value: "", disabled: true }),
    name: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, CustomValidators.onlyNumberValidator]),
    comment: new FormControl(''),
    type: new FormControl('', Validators.required),
    isPaid: new FormControl(false)
  });

  constructor(
    public dialogRef: MatDialogRef<CreateOutputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public output: OutputTO) {
    this.form.get('id').setValue(output.id);
    this.form.get('name').setValue(output.name);
    this.form.get('price').setValue(output.entryPrice);
    this.form.get('comment').setValue(output.itemComment);
    this.form.get('type').setValue(output.itemType);
    this.form.get('isPaid').setValue(output.isPaid);
    this.onSelectionChanged(null);
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClose() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.output.id = +this.form.get('id').value;
    this.output.name = this.form.get('name').value;
    this.output.entryPrice = this.form.get('price').value;
    this.output.itemComment = this.form.get('comment').value;
    this.output.itemType = this.form.get('type').value;
    this.output.isPaid = this.form.get('isPaid').value;
  }
  onSelectionChanged(value: any) {
    console.log(this.form.get('isPaid').value);

    if (this.form.get('isPaid').value) {
      this.form.get('id').disable();
      this.form.get('name').disable();
      this.form.get('price').disable();
      this.form.get('comment').disable();
      this.form.get('type').disable();
    } else {
      this.form.get('id').enable();
      this.form.get('name').enable();
      this.form.get('price').enable();
      this.form.get('comment').enable();
      this.form.get('type').enable();
    }
  }
}
