import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('../app/dashbaord/dashbaord.module').then(m => m.DashbaordModule)},
  { path: 'dashboard',  loadChildren: () => import('../app/dashbaord/dashbaord.module').then(m => m.DashbaordModule)   },
  { path: 'collection', loadChildren: () => import('../app/collection/collection.module').then(m => m.CollectionModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }