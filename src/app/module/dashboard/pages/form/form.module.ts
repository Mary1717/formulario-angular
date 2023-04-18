import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FindAllComponent } from './find-all/find-all.component';


@NgModule({
  declarations: [
    FindAllComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule
  ]
})
export class FormModule { }
