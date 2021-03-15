import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl:any='https://demo.jejakpustaka.com/api/example/users';
  constructor(private http: HttpClient) { }

  baca() 
  {
     return this.http.get(this.apiUrl);
  }

}