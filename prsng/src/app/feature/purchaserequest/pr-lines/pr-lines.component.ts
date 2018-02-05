import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PurchaseRequestLineItem } from '../../../model/purchaserequestlineitem';
import { PurchaseRequestLineItemService } from '../../../service/purchaserequestlineitem.service';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { Product } from '../../../model/product';
import { ProductService } from '../../../service/product.service';
import { Status } from '../../../model/status';
import { StatusService } from '../../../service/status.service';


@Component({
  selector: 'app-pr-lines',
  templateUrl: './pr-lines.component.html',
  styleUrls: ['./pr-lines.component.css']
})
export class PrLinesComponent implements OnInit {

  title = 'Purchase Request Lines';
  id: string;
  pr: PurchaseRequest;
  prli: PurchaseRequestLineItem[];
  resp;
  prtotal = 0.0;

  compareFn(v1: number, v2: number): boolean {
    console.log('v1 ' + v1 + ' v2 ' + v2);
    return v1 == v2;
  }

  constructor(private PRSvc: PurchaseRequestService,
              private PRLISvc: PurchaseRequestLineItemService,
              private ProdSvc: ProductService,
              private StatusSvc: StatusService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.PRSvc.get(this.id)
      .subscribe(purchaserequests => {
        this.pr = purchaserequests.length > 0 ? purchaserequests[0] : null;
  //      console.log(this.id);
  //      console.log('this.pr in PRSvc ' + purchaserequests[0].Description);
        this.addStatusDesc(this.pr);

      }
    );
    console.log('PR lines next');
    this.PRLISvc.PRLIByPRId(this.id)
      .subscribe(prlis => {
        this.prli = prlis;
        this.addProduct(this.prli);
      });
  }

  addStatusDesc(purch: PurchaseRequest) {
 //   console.log('adding status name');
 //   console.log('statusid ' + purch.StatusId);
    this.StatusSvc.get(purch.StatusId)
      .subscribe(status => {
  //      console.log('status ' + status[0].Description);
      purch.StatusDesc = status[0].Description;
      });
  }
  addProduct(prli: PurchaseRequestLineItem[]) {
    console.log('Getting Products for line items');
    let prtotal = 0.0;
    for (let prline of prli) {
      this.ProdSvc.get(prline.ProductId)
       .subscribe(products => {
           prline.ProductName = products[0].Name;
           prline.ProductPrice = products[0].Price;
           prtotal = prtotal + (prline.ProductPrice * prline.Quantity);
 //         console.log('prline.ProductPrice ' + prline.ProductPrice);
 //         console.log('Quantity ' + prline.Quantity);
 //         console.log('prline ' + prtotal);
         });
    }
  }

}
