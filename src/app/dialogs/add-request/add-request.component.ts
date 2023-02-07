import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TestService } from 'src/app/Services/test.service';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.scss']
})
export class AddRequestComponent {

  testDtoForm: FormGroup;
  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private testService: TestService,
    private snackBar: MatSnackBar
  ) {
    console.log("data ", data); //workSpaceDetails

    this.testDtoForm = this.formBuilder.group({
      name: new FormControl("", Validators.required),
      basicUrl: new FormControl("", Validators.required),
      endPoint: new FormControl("", Validators.required),
      methodType: new FormControl("", Validators.required),
      headers: new FormControl("", Validators.required),
      requestBody: new FormControl("", Validators.required),
      expectedJson: new FormControl("", Validators.required)
    });

  }

  testCaseApi() {
    let data = this.testDtoForm.getRawValue();
    data['collection'] = {
      "id": this.data
    }

    this.testService.saveRequestData(data).subscribe((result) => {
      console.log(result);
      this.snackBar.open("Request Added" , null, {duration:3000})
      this.dialog.closeAll();


    })
  }

}
