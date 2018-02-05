import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Product } from '../model/product';

const url = 'http://localhost:8080/Product/';

@Injectable()
export class ProductService {

  products: Product[];

  list(): Observable<Product[]> {
    return this.http.get(url + 'List') as Observable<Product[]>;
  }

  get(id): Observable<Product[]> {
    return this.http.get(url + 'Get?id=' + id) as Observable<Product[]>;
  }

  create(product: Product): Observable<any>  {
    return this.http.post(url + 'Add', product ) as Observable<any>;
  }

  update(product: Product): Observable<any> {
    return this.http.post(url + 'Update', product ) as Observable<any>;
  }

  delete(id): Observable<any> {
    return this.http.get(url + 'Delete?id=' + id ) as Observable<any>;
  }

  constructor(private http: HttpClient) { }

}
