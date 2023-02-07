import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LogsSpaceComponent } from '../logs-space/logs-space.component';
import { TestService } from '../Services/test.service';

@Component({
  selector: 'app-request-testing',
  templateUrl: './request-testing.component.html',
  styleUrls: ['./request-testing.component.scss']
})
export class RequestTestingComponent  implements OnChanges {


  
  @Input()
  selectedRequestData: any = null;


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  testDtoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private testService: TestService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.testDtoForm = this.formBuilder.group({
      basicUrl: new FormControl("", Validators.required),
      endPoint: new FormControl("", Validators.required),
      methodType: new FormControl("", Validators.required),
      headers: new FormControl("", Validators.required),
      requestBody: new FormControl("", Validators.required),
      expectedJson: new FormControl("", Validators.required)
    });
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes ", changes);


    if (changes['selectedRequestData'] && this.selectedRequestData) {
      this.testDtoForm.patchValue(this.selectedRequestData);
    }
  }

  testCaseApi() {

  

    let data = this.testDtoForm.value;

    data.expectedJson = data.expectedJson.replaceAll("<.*?>|\u00a0", "");
    data.requestBody = data.requestBody.replaceAll("<.*?>|\u00a0", "");

    // data.expectedJson = data.expectedJson.toString();
    // data.requestBody = data.requestBody.toString();
    console.log("data ", data);


    this.testService.testCaseApi(data).subscribe((result) => {
      console.log(result);
      this.snackBar.open("Api called Successsfully", null, {duration:3000})
      const dialogRef = this.dialog.open(LogsSpaceComponent, {
        minWidth: '80%',
        data: "Success"
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {


        }
      });

    }, error => {
      console.log(error);

      this.snackBar.open("Failed to test Api", null , {duration:3000})
    })
  }




}
