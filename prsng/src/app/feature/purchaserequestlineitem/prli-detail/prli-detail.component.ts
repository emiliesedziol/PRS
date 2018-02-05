import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequestLineItemService } from '../../../service/purchaserequestlineitem.service';
import { PurchaseRequestLineItem } from '../../../model/purchaserequestlineitem';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-prli-detail',
  templateUrl: './prli-detail.component.html',
  styleUrls: ['./prli-detail.component.css']
})
export class PrliDetailComponent implements OnInit {

  title = 'Purchase Request Line Item Detail';
  id: string;
  prid: string;
  resp: any;
  admin: string;

  prli: PurchaseRequestLineItem;

  remove() {
    this.PRLISvc.delete(this.id)
      .subscribe(resp => {
        this.resp = resp;
        console.log('delete line item ' + this.resp);
        this.router.navigate(['/pr/lines/{{prli.PurchaseRequestId}}']);
      });
  }

  constructor(private PRLISvc: PurchaseRequestLineItemService,
              private ProductSvc: ProductService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.PRLISvc.get(this.id)
      .subscribe(purchaserequestlineitems => {
        this.prli = purchaserequestlineitems.length > 0 ? purchaserequestlineitems[0] : null;
        console.log(this.prli);
        this.addProductName(this.prli);
        });
  }

  addProductName(purchs: PurchaseRequestLineItem) {
      this.ProductSvc.get(purchs.ProductId)
        .subscribe(products => {
          purchs.ProductName = products[0].Name;
        });
    }
}
