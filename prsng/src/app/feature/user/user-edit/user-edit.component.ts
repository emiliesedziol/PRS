import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  title = 'User Edit';
  id: string;
  resp: any;

  user: User;

  change() {
    this.UserSvc.update(this.user)
      .subscribe(resp => {
        this.resp = resp;
        console.log('user changed', this.resp);
        this.router.navigate(['/user/list']);
      });
  }

  constructor(private UserSvc: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.UserSvc.get(this.id)
      .subscribe(users => {
        this.user = users.length > 0 ? users[0] : null;
        console.log(this.user);
        });
  }

}
