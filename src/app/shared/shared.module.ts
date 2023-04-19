import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    TopbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule
  ],
  exports: [
    TopbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
