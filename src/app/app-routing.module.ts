import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/guards/login/login.guard';
import { SesionGuard } from './core/guards/sesion/sesion.guard';

const routes: Routes = [
  { path: 'security', loadChildren:() => import('./module/security/security.module').then(m => m.SecurityModule), canActivate: [SesionGuard] },
  { path: 'dashboard', loadChildren:() => import('./module/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [LoginGuard] },
  { path: '', redirectTo: 'security', pathMatch: 'full' },
  { path: '**', redirectTo: 'security', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
