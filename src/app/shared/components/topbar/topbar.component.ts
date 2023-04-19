import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SecurityService } from 'src/app/core/services/security/security.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  items: MenuItem[];

  constructor(private securityService: SecurityService) { }

  ngOnInit(): void {
    this.items = [
      { label: 'Formularios', icon: 'pi pi-book', routerLink: '/dashboard/form' }, 
      { label: 'Salir', icon: 'pi pi-sign-out', command: (() => {
        this.logout();
      }) }];
  }

  logout() {
    this.securityService.logout();
  }

}