import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Form } from '../../models/form';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  URL: string;

  constructor(private http:HttpClient) { 
    this.URL=environment.url_spring;
  }

  findAll():Observable<Form[]>{
    let URL = this.URL + "/api/form";
    return this.http.get<Form[]>(URL);
  }

  findById(idForm:number):Observable<Form>{
    let URL = this.URL + "/api/form/" + idForm;
    return this.http.get<Form>(URL);
  }

  create(form:Form, documentNumber:number, idmark:number):Observable<Form>{
    let URL=this.URL + "/api/form/user/" + documentNumber + "/mark/" + idmark;
    return this.http.post<Form>(URL,form);
  }

  update(form:Form, idForm:number, documentNumber:number, idmark:number):Observable<Form>{
    let URL=this.URL + "/api/form/" + idForm + "/user/" + documentNumber + "/mark/" + idmark;
    return this.http.put<Form>(URL,form)
  }

  deleteById(idForm:number):Observable<any>{
    let URL=this.URL + "/api/form/" + idForm;
    return this.http.delete<any>(URL);
  }
}
