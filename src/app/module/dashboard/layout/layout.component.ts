import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/core/services/security/security.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private securityService:SecurityService) { }

  ngOnInit(): void {
    this.securityService.startTimer();
  }

  onUserInteraction() {
    this.securityService.resetTimer();
  }


}
