import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tender } from './tender';

@Injectable({
  providedIn: 'root'
})
export class CreateTenderService {

  private baseURL = "http://localhost:8080";

  constructor(private httpClient:HttpClient) { }

  createTender(tender:Tender): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/createNewTender`,tender);
  }
}
