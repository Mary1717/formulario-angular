import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'form', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
