import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employe } from 'app/modeles/employe';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  baseAPI="http://localhost:8080/"
  constructor(private _http:HttpClient) { }
  getNbrsEmp():Observable<any>{
   // console.log(this._http.get<any>(this.baseAPI))
    return this._http.get<any>(this.baseAPI+'chaine/employe/nb');
  }
  getListsEmp():Observable<Employe[]>{
   // console.log(this._http.get<any>(this.baseAPI))
    return this._http.get<Employe[]>(this.baseAPI+'chaine/employe/10');
  }
}
