import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { CollectionListComponent } from '../collection-list/collection-list.component';
import { CollectionRequestListComponent } from '../collection-request-list/collection-request-list.component';
import { AddCollectionComponent } from '../dialogs/add-collection/add-collection.component';
import { AddRequestComponent } from '../dialogs/add-request/add-request.component';
import { LogsSpaceComponent } from '../logs-space/logs-space.component';

import { MaterialModule } from '../material-module/material.module';
import { RequestTestingComponent } from '../request-testing/request-testing.component';
import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionComponent } from './collection.component';


@NgModule({
  declarations: [
    CollectionComponent,
    CollectionListComponent,
    RequestTestingComponent ,
    AddRequestComponent,
    AddCollectionComponent,
    LogsSpaceComponent,
    CollectionRequestListComponent,
  ],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    MaterialModule, 
    NgxJsonViewerModule
  ],  
})
export class CollectionModule { }
