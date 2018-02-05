import { Component, OnInit } from '@angular/core';

import { Vendor } from '../../../model/vendor';
import { VendorService } from '../../../service/vendor.service';
import { SortPipe } from '../../../util/sort-pipe';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  title = 'Vendor List';

  selectedSortKey = 'Id';
  sortDesc = 'asc';
  sortKeys: string[] = ['Id', 'Code', 'Name'];
  selectSortKey: string[] = ['Id', 'Code', 'Name'];
  vendors: Vendor[];

  constructor(private VendorSvc: VendorService) { }

  ngOnInit() {
    this.VendorSvc.list()
      .subscribe(vendors => {
        this.vendors = vendors;
        console.log(vendors);
      });
  }

}
