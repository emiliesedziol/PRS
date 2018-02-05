import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../model/product';
import { VendorService } from '../../../service/vendor.service';
import { Vendor } from '../../../model/vendor';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  title = 'Product Edit';
  id: string;
  resp: any;

  product: Product;
  vendors: Vendor[];

  update() {
    console.log(this.product);
    this.ProductSvc.update(this.product)
      .subscribe(resp => {
        this.resp = resp;
        console.log('Product Updated:', this.resp);
        this.router.navigate(['/product/list']);
      });
  }

  compareFn(v1: number, v2: number): boolean {
    console.log('v1 ' + v1 + ' v2 ' + v2);
    return v1 == v2;
  }

  constructor(private ProductSvc: ProductService,
    private VendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.ProductSvc.get(this.id)
      .subscribe(products => this.product = products.length > 0 ? products[0] : null);
    this.VendorSvc.list()
      .subscribe(vendors => this.vendors = vendors);
  }

}
