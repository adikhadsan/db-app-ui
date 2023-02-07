import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogsSpaceComponent } from '../logs-space/logs-space.component';
import { CollectionComponent } from './collection.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionComponent, 
  }
];

@NgModule({
 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule { }
