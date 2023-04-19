import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  personForm: FormGroup;
  newUser: User;

  constructor(private formBuilder: FormBuilder, private userService:UserService, private router: Router) { }

  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      documentNumber: ["", [Validators.required]],
      user: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    })
  }

  register(){
    this.newUser = {
      documentNumber:this.personForm.value.documentNumber,
      user:this.personForm.value.user,
      password:this.personForm.value.password
    }
    
    this.userService.create(this.newUser).subscribe({
      next:(user)=>{
        this.router.navigateByUrl('/security/login')
      }
    })
  }

}
