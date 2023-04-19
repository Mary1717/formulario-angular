import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  user: string;
  token: string
  URL:string;
  checkEmailExists: any;

  constructor(private http: HttpClient, private router: Router) {
    this.URL=environment.url_spring;
    this.user = localStorage.getItem('user')?.toString()!;
    this.token = localStorage.getItem('token')?.toString()!;
   }

   login(userData: any) {
    let url = this.URL+"/login";
    this.http.post<any>(url, userData,{ observe: 'response' }).subscribe({
      next: (res) => {
        this.token = res.headers.get('authorization')!;
        localStorage.setItem('user', userData.user);
        localStorage.setItem('token', this.token);
        this.router.navigateByUrl('/dashboard/form');
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.user = "";
    this.token = "";
    this.router.navigateByUrl('/security/login');
  }

  sesionExist(): boolean {
    const token = localStorage.getItem('token')?.toString()!;
    return token ? true: false;
  }
}
