import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Bid } from './bid';

@Injectable({
  providedIn: 'root'
})
export class BidService {

  private baseURL = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  private _refreshrequired = new Subject();

  get Refreshrequired() {
    return this._refreshrequired;
  }

  createBid(bid: Bid): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/createBid`, bid).pipe(
      tap(() => {
        this.Refreshrequired.next(true);

      })
    );
  }

  tenderWiseBid(id: String): Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/tenderWiseBids/${id}`);
  }

}
