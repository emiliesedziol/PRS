import { Component, OnInit } from '@angular/core';

import { Product } from '../../../model/product';
import { Vendor } from '../../../model/vendor';
import { ProductService } from '../../../service/product.service';
import { VendorService } from '../../../service/vendor.service';

import { SortPipe } from '../../../util/sort-pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  title = 'Product List';

  selectedSortKey = 'Id';
  sortDesc = 'asc';
  sortKeys: string[] = ['Id', 'PartNumber', 'Name', 'VendorId'];
  selectSortKey: string[] = ['Id', 'PartNumber', 'Name', 'VendorId'];

  products: Product[];
  vendors: Vendor[];

  constructor(private VendorSvc: VendorService,
              private ProductSvc: ProductService) { }

  ngOnInit() {

      this.ProductSvc.list()
         .subscribe(products => {
            this.products = products;
            this.addVendorName(this.products);
          });
    }

    addVendorName(prods: Product[]) {
      for (let prod of prods) {
         console.log('Getting Vendor Name for VendorId: ' + prod.VendorId);
         this.VendorSvc.get(prod.VendorId)
          .subscribe(vendor => {
              prod.VendorName = vendor[0].Name;
              console.log('for ' + prod);
            });
      }
  }

}
