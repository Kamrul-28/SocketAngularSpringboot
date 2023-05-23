import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8080";
  constructor(private httpClient: HttpClient) { }

  login(user:User): Observable<Object>{
     return this.httpClient.post(`${this.baseURL}/authenticate`, user);
  }
}
