import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { Status } from '../../../model/status';
import { StatusService } from '../../../service/status.service';
import { User } from '../../../model/user';
import { SortPipe } from '../../../util/sort-pipe';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-pr-list',
  templateUrl: './pr-list.component.html',
  styleUrls: ['./pr-list.component.css']
})
export class PRListComponent implements OnInit {

  title = 'Purchase Request List';

  selectedSortKey = 'Id';
  sortDesc = 'asc';
  sortKeys: string[] = ['Id', 'UserId', 'Description'];
  selectSortKey: string[] = ['Id', 'UserId', 'Description'];

  purchaserequests: PurchaseRequest[];
  statuss: Status[];
  user: User;
  userId = 2;  // currently hard coded, needs to be changed when login is activated

  constructor(private PurchaseRequestSvc: PurchaseRequestService,
              private StatusSvc: StatusService,
              private UserSvc: UserService) { }

  ngOnInit() {

      this.PurchaseRequestSvc.prlist(this.userId)
        .subscribe(purchaserequests => {
          this.purchaserequests = purchaserequests;
          this.addUserName(purchaserequests);
          console.log('before addUserName');
          this.addStatusDesc(purchaserequests);

    });

  }

  addUserName(reqs: PurchaseRequest[]) {
    for (let pr of reqs ) {
      this.UserSvc.get(pr.UserId)
        .subscribe(users => {
          pr.UserName = users[0].UserName;
        });
    }
  }

  addStatusDesc(purch: PurchaseRequest[]) {
       for (let pr of purch ) {
        this.StatusSvc.get(pr.StatusId)
          .subscribe(status => {
           console.log('status ' + status[0].Description);
          pr.StatusDesc = status[0].Description;
         });
     }

  }
}
