import { Component, OnInit } from '@angular/core';

import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';
import { SystemService } from '../../../service/system.service';
import { LogService } from '../../../service/log.service';
import { SortPipe } from '../../../util/sort-pipe';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title = 'User List';

  selectedSortKey = 'Id';
  sortDesc = 'asc';
  sortKeys: string[] = ['Id', 'UserName', 'FirstName', 'LastName'];
  selectSortKey: string[] = ['Id', 'UserName', 'FirstName', 'LastName'];
  users: User[];


  constructor(private UserSvc: UserService,
              private SysSvc: SystemService,
              private LogSvc: LogService) { }

  ngOnInit() {
    this.UserSvc.list()
      .subscribe(users => {
        this.users = users;
        console.log(users);
      });
  }

}
