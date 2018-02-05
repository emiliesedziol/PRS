export class PurchaseRequest {
  Id: number;
  UserId: number;
  UserName: string;
  Description: string;
  Justification: string;
  DateNeeded: string;
  DeliveryMode: string;
  StatusId: string;
  StatusDesc: string;
  Total: number;
  SubmittedDate: string;
  ReasonForRejection: string;
  Active: boolean;

  constructor (id: number,
              userid: number,
              description: string,
              justification: string,
              dateneeded: string,
              deliverymode: string,
              statusid: string,
              total: number,
              submitteddate: string,
              reasonforrejection: string,
              active: boolean) {
                this.Id = id;
                this.Description = description;
                this.Justification = justification;
                this.DateNeeded = dateneeded;
                this.DeliveryMode = deliverymode;
                this.StatusId = statusid;
                this.Total = total;
                this.SubmittedDate = submitteddate;
                this.ReasonForRejection = reasonforrejection;
                this.Active = active;
              }
}
