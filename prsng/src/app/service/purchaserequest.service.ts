import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { PurchaseRequest } from '../model/purchaserequest';

const url = 'http://localhost:8080/PR/';

@Injectable()
export class PurchaseRequestService {

  purchaserequests: PurchaseRequest[];

  list(): Observable<PurchaseRequest[]> {
    return this.http.get(url + 'List') as Observable<PurchaseRequest[]>;
  }

  get(id): Observable<PurchaseRequest[]> {
   //  console.log('Get?id=' + id);
    return this.http.get(url + 'Get?id=' + id) as Observable<PurchaseRequest[]>;
  }

  prlist(id): Observable<PurchaseRequest[]> {
    // http://localhost:8080/PR/PRList?id=1
    return this.http.get(url + 'PRList?id=' + id) as Observable<PurchaseRequest[]>;
  }

  create(purchaserequest: PurchaseRequest): Observable<any>  {
    return this.http.post(url + 'Add', purchaserequest ) as Observable<any>;
  }

  update(purchaserequest: PurchaseRequest): Observable<any> {
    return this.http.post(url + 'Update', purchaserequest ) as Observable<any>;
  }

  delete(id): Observable<any> {
    return this.http.get(url + 'Delete?id=' + id ) as Observable<any>;
  }

  constructor(private http: HttpClient) { }

}
