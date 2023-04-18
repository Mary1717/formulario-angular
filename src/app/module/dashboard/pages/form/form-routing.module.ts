import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindAllComponent } from './find-all/find-all.component';

const routes: Routes = [
  { path: 'findAll', component: FindAllComponent },
  { path: '**', redirectTo: 'findAll', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
