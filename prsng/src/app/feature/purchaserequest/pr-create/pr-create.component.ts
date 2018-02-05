import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { PurchaseRequest } from '../../../model/purchaserequest';

@Component({
  selector: 'app-pr-create',
  templateUrl: './pr-create.component.html',
  styleUrls: ['./pr-create.component.css']
})
export class PRCreateComponent implements OnInit {

  title = 'Create a new Purchase Request';
  resp: any;
  purchaserequest: PurchaseRequest = new PurchaseRequest( 0,
  0, '', '', '', '', '', 0, '', '', true);

  create() {
    console.log(this.purchaserequest);
    this.PRSvc.create(this.purchaserequest)
      .subscribe(resp => {
        this.resp = resp;
        console.log('Vendor added ', this.resp);
        this.router.navigate(['/prli/create']);
      });
  }

  constructor(private PRSvc: PurchaseRequestService,
              private router: Router) { }

  ngOnInit() {
  }

}
