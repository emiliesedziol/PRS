import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { VendorService } from '../../../service/vendor.service';
import { Vendor } from '../../../model/vendor';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  title = 'Vendor Detail';

  id: string;
  resp: any;
  admin: string;
  vendor: Vendor;

  remove() {
    this.VendorSvc.delete(this.vendor.Id)
      .subscribe(resp => {
        this.resp = resp;
        console.log('user deleted', this.resp);
        this.router.navigate(['/vendor/list']);
      });
    }

  constructor(private VendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.VendorSvc.get(this.id)
      .subscribe(vendors => {
        this.vendor = vendors.length > 0 ? vendors[0] : null;
        console.log(this.vendor);
        });
  }
}
