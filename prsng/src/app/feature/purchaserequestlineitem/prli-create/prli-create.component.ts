import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequestLineItemService } from '../../../service/purchaserequestlineitem.service';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { PurchaseRequestLineItem } from '../../../model/purchaserequestlineitem';
import { ProductService } from '../../../service/product.service';
import { VendorService } from '../../../service/vendor.service';
import { SystemService } from '../../../service/system.service';
import { Product } from '../../../model/product';
import { PurchaseRequest } from '../../../model/purchaserequest';

@Component({
  selector: 'app-prli-create',
  templateUrl: './prli-create.component.html',
  styleUrls: ['./prli-create.component.css']
})
export class PrliCreateComponent implements OnInit {

  title = 'Purchase Request';
  prid: number;
  resp: any;

  prli: PurchaseRequestLineItem = new PurchaseRequestLineItem(0, 0, 0, 0, true);
  purchaseRequest: PurchaseRequest;
  products: Product[];


  compareFn(u1: Product, u2: Product) {
    return u1 && u2 ? u1.Id == u2.Id : u1 == u2;
  }

create() {
  console.log(this.prli);
  this.prli.PurchaseRequestId = this.purchaseRequest.Id;
  this.PRLISvc.create(this.prli)
    .subscribe(resp => {
      this.resp = resp;
      console.log('line item added ', this.resp);
      this.router.navigateByUrl('/pr/lines/' + this.prid);
    });
}

  constructor(private PRLISvc: PurchaseRequestLineItemService,
              private PRSvc: PurchaseRequestService,
              private ProductSvc: ProductService,
              private vendorSvc: VendorService,
              private SysSvc: SystemService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(parms => {
      this.prid = parms['id'];
      console.log('this.prid ' + this.prid);
      this.PRSvc.get(this.prid)
        .subscribe(purchaseRequests => {
          this.purchaseRequest = purchaseRequests.length > 0 ? purchaseRequests[0] : null;
        });
      });
      this.ProductSvc.list()
       .subscribe(pdts => {
          this.products = pdts;
          this.addVendorName(pdts);
        }
      );
  }

  addVendorName(prods: Product[]) {
    for (let prod of prods) {
      this.vendorSvc.get(prod.VendorId)
        .subscribe(vendors => {
          prod.VendorName = vendors[0].Name;
        });
    }
  }

}
