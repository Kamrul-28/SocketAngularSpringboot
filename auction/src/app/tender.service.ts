import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tender } from './tender';

@Injectable({
  providedIn: 'root'
})
export class TenderService {
  id: any;

  private baseURL = "http://localhost:8080";
  constructor(private httpClient:HttpClient) { }

  getTenderList(): Observable<Tender[]>{
    return this.httpClient.get<Tender[]>(`${this.baseURL}/tender`);
  }

  createTender(tender: Tender): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/createNewTender`, tender);
  }

  startOction(id:number): Observable<Tender[]>{
    return this.httpClient.get<Tender[]>(`${this.baseURL}/stratOction/${id}`);
  }

  closeOction(id:number): Observable<Tender[]>{
    return this.httpClient.get<Tender[]>(`${this.baseURL}/closeOction/${id}`);
  }
}
