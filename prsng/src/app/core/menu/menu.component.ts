import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { SystemService } from '../../service/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuItems: Menu[] = [
    new Menu('Request', '/pr/list', 'List of Purchase Requests'),
    new Menu('User', '/user/list', 'List of Users'),
    new Menu('Vendor', '/vendor/list', 'List of Vendors'),
    new Menu('Product', '/product/list', 'List of Products'),
    new Menu('Login', '/user/login', 'login')
  ];
  constructor(private SysSvc: SystemService) { }

}
