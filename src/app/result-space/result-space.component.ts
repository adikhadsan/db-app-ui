import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-result-space',
  templateUrl: './result-space.component.html',
  styleUrls: ['./result-space.component.scss']
})
export class ResultSpaceComponent {

  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog , 
    public dialogRef: MatDialogRef<ResultSpaceComponent>) { }

  createSubWorkspace(){
    this.dialogRef.close("createSubWorkspace")
  }

  createParentWorkspace(){
    this.dialogRef.close("createParentWorkspace")
  }

}
