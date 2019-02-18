import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class QuizService {
  private url = "http://localhost:8080/quiz";

  constructor(private http: HttpClient) {}

  headerDict = {
    'Content-Type': 'application/json',
    'Authorization':'Bearer '+ localStorage.getItem('token'),    
    "Access-Control-Allow-Credentials" : "true",
    'Access-Control-Allow-Origin': '*'
  }
  
  getCategories(): Observable<any> {
    const url = `${this.url}`+'/categories';
    return this.http.get(url, {headers:new HttpHeaders(this.headerDict)});
  }

  getQuiz(quizId: any): Observable<any> {
    const url = `${this.url}/` + quizId;
    return this.http.get(url , { headers:new HttpHeaders(this.headerDict) });
  }

  getResult(userId: any): Observable<any> {
    const url = `${this.url}/result-history/` + userId;
    return this.http.get(url , { headers:new HttpHeaders(this.headerDict) });
  }

  assessQuiz(user: any, quizId: number): Observable<any> {
    const url = `${this.url}`+'/assess/' + quizId;
    return this.http.post(url, user, { headers:new HttpHeaders(this.headerDict) });
  }
}