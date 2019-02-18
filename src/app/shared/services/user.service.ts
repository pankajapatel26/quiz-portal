import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {
  private url = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  headerDict = {
    'Content-Type': 'application/json',
    'Authorization':'Bearer '+ localStorage.getItem('token'),
    "Access-Control-Allow-Credentials" : "true",
    'Access-Control-Allow-Origin': '*'
  }
  
  registerUser(user: any): Observable<any> {
    const url = `${this.url}`+'/user/register';
    return this.http.post(url ,user, {headers:new HttpHeaders({'Content-Type': 'application/json'})});
  }

  login(username: any, password: any): Observable<any> {
    const url = `${this.url}`+'/token/generate-token';
    let loginDeatils = {'username': username, 'password':password};
    return this.http.post(url , loginDeatils, {headers:new HttpHeaders({'Content-Type': 'application/json'})});
  }
}