import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryGradeService {

  constructor( protected http: HttpClient) { }

  getcategorygrades(){
    return this.http.get('http://webappbackend.test/api/GradeCategory');
  }

  getcategorygrade(id){
    return this.http.get(`http://webappbackend.test/api/GradeCategory/${id}`);
  }

  postcategorygrade(data){
    return this.http.post('http://webappbackend.test/api/GradeCategory',data);
  }

  putcategorygrade(id,data){
    return this.http.put(`http://webappbackend.test/api/GradeCategory/${id}`, data);
  }

  deletecategorygrade(id): Observable<any> {
    return this.http.delete(`http://webappbackend.test/api/GradeCategory/${id}`);
  }


}
