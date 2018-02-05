export class User {
    Id: string;
    UserName: string;
    Password: string;
    FirstName: string;
    LastName: string;
    Phone: string;
    Email: string;
    Reviewer: boolean;
    Admin: boolean;
    Active: boolean;

    constructor (id: string,
                userName: string,
                password: string,
                firstName: string,
                lastName: string,
                phone: string,
                email: string,
                reviewer: boolean,
                admin: boolean,
                active: boolean) {
                    this.Id = id;
                    this.UserName = userName;
                    this.Password = password;
                    this.FirstName = firstName;
                    this.LastName = lastName;
                    this.Phone = phone;
                    this.Email = email;
                    this.Reviewer = reviewer;
                    this.Admin = admin;
                    this.Active = active;
                }
}
