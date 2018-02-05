export class Status {
  Id: string;
  Description: string;

 constructor (id: string,
              description: string,
              active: boolean) {
                this.Id = id;
                this.Description = description;
              }
}
