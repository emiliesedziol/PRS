export class Product {
  Id: number;
  VendorId: number;
  VendorName: string;
  PartNumber: string;
  Name: string;
  Price: number;
  Unit: string;
  Photopath: string;
  Active: boolean;

  constructor (id: number,
              vendorid: number,
              partNumber: string,
              name: string,
              price: number,
              unit: string,
              photopath: string,
              active: boolean) {
                  this.Id = id;
                  this.VendorId = vendorid;
                  this.PartNumber = partNumber;
                  this.Name = name;
                  this.Price = price;
                  this.Unit = unit;
                  this.Photopath = photopath;
                  this.Active = active;
              }
}
