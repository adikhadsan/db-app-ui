import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CollectionRequestListComponent } from '../collection-request-list/collection-request-list.component';
import { RequestTestingComponent } from '../request-testing/request-testing.component';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent {

  @ViewChild('readlineComp',{read:ViewContainerRef, static:true}) private readlineCompRef : ViewContainerRef;

  selectedRequestData: any = null;

  selectedCollectionData: any = null;

  async selectRequest($event) {
    console.log("event request", $event);
    this.selectedRequestData = $event;

    this.readlineCompRef.clear();
    let requestTestingCompRef = this.readlineCompRef.createComponent(RequestTestingComponent);
    requestTestingCompRef.instance.selectedRequestData = $event;

  }

  async selectCollection($event) {
    console.log("event collection", $event);
    this.selectedCollectionData = $event;

    this.readlineCompRef.clear();
    let collectionRequestListCompoRef = this.readlineCompRef.createComponent(CollectionRequestListComponent);
    collectionRequestListCompoRef.instance.selectedCollectionData = $event;

  }
  
}
