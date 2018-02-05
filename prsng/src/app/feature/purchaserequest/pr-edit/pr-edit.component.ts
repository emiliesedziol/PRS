import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { PurchaseRequest } from '../../../model/purchaserequest';

@Component({
  selector: 'app-pr-edit',
  templateUrl: './pr-edit.component.html',
  styleUrls: ['./pr-edit.component.css']
})
export class PREditComponent implements OnInit {

  title = 'Purchase Request Edit';
  id: string;
  resp: any;

  pruchaserequest: PurchaseRequest;

  update() {
    console.log(this.pruchaserequest);
    this.PRSvc.update(this.pruchaserequest)
      .subscribe(resp => {
        this.resp = resp;
        console.log('Product updated:', this.resp);
        this.router.navigate(['/pr/list']);
      });
  }

  constructor(private PRSvc: PurchaseRequestService,
            private router: Router,
            private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.PRSvc.get(this.id)
      .subscribe(pruchaserequest => this.pruchaserequest = pruchaserequest.length > 0 ? pruchaserequest[0] : null);
  }

}
