import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Vendor } from '../model/vendor';

const url = 'http://localhost:8080/Vendor/';

@Injectable()
export class VendorService {

  vendors: Vendor[];

  list(): Observable<Vendor[]> {
    return this.http.get(url + 'List') as Observable<Vendor[]>;
  }

  get(id): Observable<Vendor[]> {
    return this.http.get(url + 'Get?id=' + id) as Observable<Vendor[]>;
  }

  create(vendor: Vendor): Observable<any>  {
    return this.http.post(url + 'Add', vendor ) as Observable<any>;
  }

  update(vendor: Vendor): Observable<any> {
    return this.http.post(url + 'Update', vendor ) as Observable<any>;
  }

  delete(id): Observable<any> {
    return this.http.get(url + 'Delete?id=' + id ) as Observable<any>;
  }

  constructor(private http: HttpClient) { }

}
