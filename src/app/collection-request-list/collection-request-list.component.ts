import { Component, Input } from '@angular/core';
import { TestService } from '../Services/test.service';

@Component({
  selector: 'app-collection-request-list',
  templateUrl: './collection-request-list.component.html',
  styleUrls: ['./collection-request-list.component.scss']
})
export class CollectionRequestListComponent {

  constructor(private api :TestService){

  }



  output = {
    'simple key': 'simple value',
    numbers: 1234567,
    'simple list': ['value1', 22222, 'value3'],
    'special value': undefined,
    owner: null,
    'simple obect': {
      'simple key': 'simple value',
      numbers: 1234567,
      'simple list': ['value1', 22222, 'value3'],
      'simple obect': {
        key1: 'value1',
        key2: 22222,
        key3: 'value3',
      },
    },
  };

  expected = {
    'simple key': 'simple value',
    numbers: 1234567,
    'simple list': ['value1', 22222, 'value3'],
    'special value': undefined,
    owner: null
  };

  reason = {
    'simple key': 'simple value',

    owner: null,
    'simple obect': {
      'simple key': 'simple value',
      numbers: 1234567,
      'simple list': ['value1', 22222, 'value3'],
      'simple obect': {
        key1: 'value1',
        key2: 22222,
        key3: 'value3',
      },
    },
  };

  panelOpenState = false;

  @Input()
  selectedCollectionData: any = null;

  deleteRecord(request){
    console.log("request ",request);
    this.selectedCollectionData.children.splice(0,1)

    // this.api.deleteRecord(request).subscribe(rec => {
    //   console.log("RecordDeleted")
    // })
    

  }

}
