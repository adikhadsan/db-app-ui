import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { AddCollectionComponent } from '../dialogs/add-collection/add-collection.component';
import { AddRequestComponent } from '../dialogs/add-request/add-request.component';
import { TestService } from '../Services/test.service';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss']
})
export class CollectionListComponent {


  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();

  @Output()
  selectRequestEvent = new EventEmitter<any>();

  @Output()
  selectCollectionEvent = new EventEmitter<any>();

  selectedRequest: any = null;

  constructor(
    private testService: TestService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.dataSource.data = [];
  }

  ngOnInit(): void {
    this.getAllCollections();
  }

  getAllCollections() {
    this.testService.getAllCollections().subscribe((result) => {
      console.log(result);
      this.dataSource.data = result;
    }, error => {
      console.log(error);
      this.snackBar.open("Failed to get Collections.", null, { duration: 3000 })
    })
  }

  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;

  addRequest(node) {
    console.log("node ", node);
    const dialogRef = this.dialog.open(AddRequestComponent, {
      minWidth: '80%',
      height: '60%',
      data: node.id
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllCollections();
    });

  }

  addCollection() {
    const dialogRef = this.dialog.open(AddCollectionComponent, {
      minWidth: '50%',
      height: '30%',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllCollections();
    });
  }

  selectRequest(selectedRequest) {
    this.selectedRequest = selectedRequest
    this.selectRequestEvent.emit(this.selectedRequest)
  }



  selectCollection(selectedCollection) {
    this.selectCollectionEvent.emit(selectedCollection)
  }

}

