import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { Status } from '../../../model/status';
import { StatusService } from '../../../service/status.service';
import { User } from '../../../model/user';
import { SortPipe } from '../../../util/sort-pipe';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-pr-listforuser',
  templateUrl: './pr-listforuser.component.html',
  styleUrls: ['./pr-listforuser.component.css']
})
export class PrListforuserComponent implements OnInit {

  user: User;

  UserName = this.UserName;



  title = 'Purchase Request List for ';

  constructor() { }

  ngOnInit() {

  }

}
