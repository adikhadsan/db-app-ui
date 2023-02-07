import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestService } from '../Services/test.service';

@Component({
  selector: 'app-logs-space',
  templateUrl: './logs-space.component.html',
  styleUrls: ['./logs-space.component.scss']
})
export class LogsSpaceComponent implements OnChanges  , OnInit  {
 

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

  logsList = [];
  constructor(
    private testService: TestService,
    public dialog: MatDialog,
  ) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges " ,changes);
    
  }

  ngOnInit(): void {
    this.getAllLogs();
  }


  getAllLogs() {

    this.testService.getAllLogs().subscribe((result) => {
      console.log(result);
      this.logsList = result;
    })
  }

}
