import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },  
  //{ path: 'gsbi', component: GsbiComponent },
  //{ path: 'gsbi', loadChildren: () => import('@masalinas/gsbi').then(m => m.GsbiModule) },  
  //{ path: 'gspl', loadChildren: () => import('@masalinas/gspl').then(m => m.GsplModule) },
  { path: 'gspl', loadChildren: () => import('./gspl/gspl.module').then(m => m.GsplModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
