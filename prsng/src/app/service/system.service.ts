import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { UserService } from './user.service';

@Injectable()
export class SystemService {

  defUser: User = new User('0', '', '', '', '', '', '', true,
  true, true);

  data = {
    about: 'System Service',
    user: {
      loggedIn: false,
      instance: this.defUser
    }
  };

  get fullname() {
    return this.data.user.loggedIn
      ? this.data.user.instance.FirstName + ' ' + this.data.user.instance.LastName
      : 'Not Logged in';
  }
  get isAdmin() {
    return this.data.user.instance.Admin;
  }
  get isReviewer() {
    return this.data.user.instance.Reviewer;
  }
  get debug() { return this.data; }

  constructor() { }

}
