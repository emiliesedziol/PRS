import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

import { Vendor } from '../../../model/vendor';
import { VendorService } from '../../../service/vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  title = 'Vendor Edit';
  id: string;
  resp: any;

  vendor: Vendor;

  update() {
    console.log(this.vendor);
    this.VendorSvc.update(this.vendor)
      .subscribe(resp => {
        this.resp = resp;
        console.log('Product updated:', this.resp);
        this.router.navigate(['/vendor/list']);
      });
  }

  constructor(private VendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.VendorSvc.get(this.id)
      .subscribe(vendor => this.vendor = vendor.length > 0 ? vendor[0] : null);
  }

}
