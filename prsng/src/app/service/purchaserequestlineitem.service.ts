import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { PurchaseRequestLineItem } from '../model/purchaserequestlineitem';

const url = 'http://localhost:8080/PRLI/';

@Injectable()
export class PurchaseRequestLineItemService {

  purchaserequestslineitems: PurchaseRequestLineItem[];

  PRLIByPRId(id): Observable<PurchaseRequestLineItem[]> {
    console.log( url + 'LinesForPR?id=' + id);
    return this.http.get(url + 'LinesForPR?id='+id) as Observable<PurchaseRequestLineItem[]>;
  }

  list(): Observable<PurchaseRequestLineItem[]> {
    return this.http.get(url + 'List') as Observable<PurchaseRequestLineItem[]>;
  }

  get(id): Observable<PurchaseRequestLineItem[]> {
    return this.http.get(url + 'Get?id=' + id) as Observable<PurchaseRequestLineItem[]>;
  }

  create(purchaserequestlineitem: PurchaseRequestLineItem): Observable<any>  {
    console.log('inside create');
    console.log(purchaserequestlineitem);
    return this.http.post(url + 'Add', purchaserequestlineitem ) as Observable<any>;
  }

  update(purchaserequestlineitem: PurchaseRequestLineItem): Observable<any> {
    return this.http.post(url + 'Update', purchaserequestlineitem ) as Observable<any>;
  }

  delete(id): Observable<any> {
    return this.http.get(url + 'Delete?id=' + id ) as Observable<any>;
  }

  constructor(private http: HttpClient) { }

}
