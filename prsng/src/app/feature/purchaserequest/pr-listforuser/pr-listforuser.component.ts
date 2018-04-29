import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { Status } from '../../../model/status';
import { StatusService } from '../../../service/status.service';
import { User } from '../../../model/user';
import { SortPipe } from '../../../util/sort-pipe';
import { UserService } from '../../../service/user.service';
import { SystemService } from '../../../service/system.service';
import { LogService } from '../../../service/log.service';
import { userInfo } from 'os';

@Component({
  selector: 'app-pr-listforuser',
  templateUrl: './pr-listforuser.component.html',
  styleUrls: ['./pr-listforuser.component.css']
})
export class PrListforuserComponent implements OnInit {

  title = 'Purchase Request List for ';

  selectedSortKey = 'Id';
  sortDesc = 'asc';
  sortKeys: string[] = ['Id', 'UserId', 'Description'];
  selectSortKey: string[] = ['Id', 'UserId', 'Description'];

  purchaserequests: PurchaseRequest[];
  statuss: Status[];
  user: User;

  constructor(private PurchaseRequestSvc: PurchaseRequestService,
    private SysSvc: SystemService,
    private StatusSvc: StatusService,
    private LogSvc: LogService) { }

  ngOnInit() {

    this.PurchaseRequestSvc.userpr(this.SysSvc.data.user.instance.Id)
    .subscribe(purchaserequests => {
      this.purchaserequests = purchaserequests;
      this.addStatusDesc(purchaserequests);

    });

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
