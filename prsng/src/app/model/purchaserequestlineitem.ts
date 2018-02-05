import { Product } from '../model/product';
import { PurchaseRequest } from '../model/purchaserequest';

export class PurchaseRequestLineItem {
  Id: number;
  PurchaseRequestId: number;
  PurchaseRequest: PurchaseRequest;
  ProductId: number;
  ProductName: string;
  ProductPrice: number;
  Quantity: number;
  Total: number;
  PRTotal: number;
  Active: boolean;

  constructor (id: number,
              purchaserequestid: number,
              productid: number,
              quantity: number,
              active: boolean) {
                this.Id = id;
                this.PurchaseRequestId = purchaserequestid;
                this.ProductId = productid;
                this.Quantity = quantity;
                this.Active = active;
              }
}
