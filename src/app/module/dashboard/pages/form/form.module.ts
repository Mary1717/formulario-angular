import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FindAllComponent } from './find-all/find-all.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    FindAllComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    TableModule,
    ButtonModule,
    ConfirmPopupModule,
    ToastModule,
    DialogModule,
    InputTextareaModule,
    DropdownModule,
    FormsModule,  
    ReactiveFormsModule,
    InputTextModule
  ]
})
export class FormModule { }
