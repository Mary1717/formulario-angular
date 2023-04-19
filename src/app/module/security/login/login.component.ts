import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SecurityService } from 'src/app/core/services/security/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  personForm: FormGroup;
  count: number = this.securityService.countSesion;

  constructor(private formBuilder: FormBuilder, private securityService: SecurityService, private router: Router, private messageService:MessageService) { }

  ngOnInit(): void {  
    this.personForm = this.formBuilder.group({
      user: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    })
  }


  login(){
    this.securityService.login(this.personForm.value);
    this.count = this.securityService.countSesion;
    if(this.count == 3){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Sesión bloqueada por intentos fallidos.' });
    }
  }

  goSingUp(): void {
    this.router.navigate(['security/register'])
  }
}
