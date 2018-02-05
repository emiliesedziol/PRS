import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';

import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { MenuComponent } from './core/menu/menu.component';

import { UserService } from './service/user.service';
import { ProductService } from './service/product.service';
import { VendorService } from './service/vendor.service';
import { LogService } from './service/log.service';
import { SystemService } from './service/system.service';
import { PurchaseRequestService } from './service/purchaserequest.service';
import { PurchaseRequestLineItemService } from './service/purchaserequestlineitem.service';
import { StatusService } from './service/status.service';

import { SortPipe } from './util/sort-pipe';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserLoginComponent } from './feature//user/user-login/user-login.component';

import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';

import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';


import { PRCreateComponent } from './feature/purchaserequest/pr-create/pr-create.component';
import { PRDetailComponent } from './feature/purchaserequest/pr-detail/pr-detail.component';
import { PREditComponent } from './feature/purchaserequest/pr-edit/pr-edit.component';
import { PRListComponent } from './feature/purchaserequest/pr-list/pr-list.component';
import { PrLinesComponent } from './feature/purchaserequest/pr-lines/pr-lines.component';

import { PrliCreateComponent } from './feature/purchaserequestlineitem/prli-create/prli-create.component';
import { PrliDetailComponent } from './feature/purchaserequestlineitem/prli-detail/prli-detail.component';
import { PrliEditComponent } from './feature/purchaserequestlineitem/prli-edit/prli-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    UserListComponent,
    SortPipe,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,
    VendorCreateComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorListComponent,
    UserLoginComponent,
    PRCreateComponent,
    PRDetailComponent,
    PREditComponent,
    PRListComponent,
    PrliDetailComponent,
    PrliCreateComponent,
    PrliEditComponent,
    PrLinesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    LogService,
    ProductService,
    PurchaseRequestService,
    PurchaseRequestLineItemService,
    StatusService,
    SystemService,
    UserService,
    VendorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
