import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../model/user';

const url = 'http://localhost:8080/User/';

@Injectable()
export class UserService {

  users: User[];

  validate(userName: string, password: string): Observable<User[]> {
    return this.http.get(url + 'Validate?userName=' + userName + '&password=' + password) as Observable<User[]>;
  }

  list(): Observable<User[]> {
    return this.http.get(url + 'List') as Observable<User[]>;
  }

  get(id): Observable<User[]> {
    return this.http.get(url + 'Get?id=' + id) as Observable<User[]>;
  }

  create(user: User): Observable<any>  {
    return this.http.post(url + 'Add', user ) as Observable<any>;
  }

  update(user: User): Observable<any> {
    return this.http.post(url + 'Update', user ) as Observable<any>;
  }

  delete(id): Observable<any> {
    return this.http.get(url + 'Delete?id=' + id ) as Observable<any>;
  }

  constructor(private http: HttpClient) { }

}
