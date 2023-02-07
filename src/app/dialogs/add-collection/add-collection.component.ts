import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TestService } from 'src/app/Services/test.service';

@Component({
  selector: 'app-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.scss']
})
export class AddCollectionComponent {

  collectionName: string = "";

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private testService: TestService,
  ) {

  }


  addCollection() {
    console.log("collectionName ", this.collectionName);

    if (this.collectionName && this.collectionName.trim() != "") {

      let data = {
        name: this.collectionName
      }

      this.testService.saveCollections(data).subscribe((result) => {
        console.log(result);
        this.snackBar.open("Collection Added", null, {duration:3000})
        this.dialog.closeAll();


      })

    }

  }
}
