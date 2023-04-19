import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL: string;
  
  constructor(private http:HttpClient) {
    this.URL=environment.url_spring;
   }


  findAll():Observable<User[]>{
    let URL = this.URL + "/api/user/";
    return this.http.get<User[]>(URL);
  }

  findById(documentNumber:BigInt):Observable<User>{
    let URL = this.URL + "/api/user/" + documentNumber;
    return this.http.get<User>(URL);
  }

  create(user:User):Observable<User>{
    let URL=this.URL + "/api/user";
    return  this.http.post<User>(URL,user);
  }

  update(user:User,documentNumber:BigInt):Observable<User>{
    let URL=this.URL +  "/api/user/" + documentNumber;
    return this.http.put<User>(URL,user)
  }

  deleteById(documentNumber:BigInt):Observable<any>{
    let URL=this.URL + "/api/user/" + documentNumber;
    return this.http.delete<any>(URL);
  }
}
