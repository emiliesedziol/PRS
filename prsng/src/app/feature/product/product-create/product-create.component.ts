import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { ProductService } from '../../../service/product.service';
import { VendorService } from '../../../service/vendor.service';
import { Product } from '../../../model/product';
import { Vendor } from '../../../model/vendor';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  title = 'Product Create';
  resp: any;
   Product: Product = new Product(0, 0, '', '', 0, '', '', true);
   vendors: Vendor[];

   create() {
    console.log(this.Product);
    this.ProductSvc.create(this.Product)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/product/list']);
      });
  }

  constructor(private ProductSvc: ProductService,
              private VendorSvc: VendorService,
              private router: Router) { }

  ngOnInit() {
    this.VendorSvc.list()
      .subscribe(vendors => this.vendors = vendors);
  }

}
