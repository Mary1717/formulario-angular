import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
      { path: 'form', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },
    ]
  },
  { path: '**', redirectTo: 'form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
