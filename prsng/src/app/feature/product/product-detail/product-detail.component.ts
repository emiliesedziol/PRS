import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  title = 'Product Detail';

  id: string;
  resp: any;
  admin: string;

  product: Product;

  remove() {
    this.ProductSvc.delete(this.product.Id)
      .subscribe(resp => {
        this.resp = resp;
        console.log('product deleted', this.resp);
        this.router.navigate(['/product/list']);
      });
  }

  constructor(private ProductSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.ProductSvc.get(this.id)
      .subscribe(products => {
        this.product = products.length > 0 ? products[0] : null;
        console.log(this.product);
        });
  }

}
