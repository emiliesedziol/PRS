import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { PurchaseRequest } from '../../../model/purchaserequest';

@Component({
  selector: 'app-pr-detail',
  templateUrl: './pr-detail.component.html',
  styleUrls: ['./pr-detail.component.css']
})
export class PRDetailComponent implements OnInit {

  title = 'Purchase Request Detail';

  id: string;
  resp: any;
  admin: string;

  purchaserequest: PurchaseRequest;

  constructor(private PRSvc: PurchaseRequestService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(parms => this.id = parms['id']);
    this.PRSvc.get(this.id)
      .subscribe(purchaserequests => {
        this.purchaserequest = purchaserequests.length > 0 ? purchaserequests[0] : null;
        console.log(this.purchaserequest);
        });

  }

}
