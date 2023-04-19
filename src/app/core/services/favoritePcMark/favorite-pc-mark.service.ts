import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { FavoritePcMark } from '../../models/favoritePcMark';

@Injectable({
  providedIn: 'root'
})
export class FavoritePcMarkService {
  URL: string;

  constructor(private http:HttpClient) {
    this.URL=environment.url_spring;
   }

  findAll():Observable<FavoritePcMark[]>{
    let URL = this.URL + "/api/favoritePc/";
    return this.http.get<FavoritePcMark[]>(URL);
  }

  findById(idMark:number):Observable<FavoritePcMark>{
    let URL = this.URL + "/favoritePc/" + idMark;
    return this.http.get<FavoritePcMark>(URL);
  }

}
