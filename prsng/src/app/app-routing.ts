import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';

import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';

import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';

import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';

import { PRListComponent } from './feature/purchaserequest/pr-list/pr-list.component';
import { PRDetailComponent } from './feature/purchaserequest/pr-detail/pr-detail.component';
import { PREditComponent } from './feature/purchaserequest/pr-edit/pr-edit.component';
import { PRCreateComponent } from './feature/purchaserequest/pr-create/pr-create.component';
import { PrLinesComponent } from './feature/purchaserequest/pr-lines/pr-lines.component';

import { PrliEditComponent } from './feature/purchaserequestlineitem/prli-edit/prli-edit.component';
import { PrliDetailComponent } from './feature/purchaserequestlineitem/prli-detail/prli-detail.component';
import { PrliCreateComponent } from './feature/purchaserequestlineitem/prli-create/prli-create.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'pr/detail/:id', component: PRDetailComponent },
    { path: 'pr/edit/:id', component: PREditComponent },
    { path: 'pr/create', component: PRCreateComponent },
    { path: 'pr/lines/:id', component: PrLinesComponent },
    { path: 'pr/list', component: PRListComponent },
    { path: 'prli/detail/:id/:prid', component: PrliDetailComponent },
    { path: 'prli/create/:id', component: PrliCreateComponent },
    { path: 'prli/edit/:id/:prid', component: PrliEditComponent },
    { path: 'user/login', component: UserLoginComponent },
    { path: 'user/detail/:id', component: UserDetailComponent },
    { path: 'user/edit/:id', component: UserEditComponent },
    { path: 'user/create', component: UserCreateComponent },
    { path: 'user/list', component: UserListComponent },
    { path: 'product/detail/:id', component: ProductDetailComponent },
    { path: 'product/edit/:id', component: ProductEditComponent },
    { path: 'product/create', component: ProductCreateComponent },
    { path: 'product/list', component: ProductListComponent },
    { path: 'vendor/detail/:id', component: VendorDetailComponent },
    { path: 'vendor/edit/:id', component: VendorEditComponent },
    { path: 'vendor/create', component: VendorCreateComponent },
    { path: 'vendor/list', component: VendorListComponent },
    { path: 'home', component: UserListComponent },
    { path: '**', component: HomeComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule  { }
