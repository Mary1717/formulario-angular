import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/core/services/security/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  personForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private securityService: SecurityService, private router: Router) { }

  ngOnInit(): void {  
    this.personForm = this.formBuilder.group({
      user: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    })
  }


  login(){
    this.securityService.login(this.personForm.value);
  }

  goSingUp(): void {
    this.router.navigate(['security/register'])
  }
}
