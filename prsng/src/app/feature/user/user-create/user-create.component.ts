import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  title = 'User Create';

  resp: any;

  user: User = new User('0', '', '', '', '', '', '', false, false, true);

  create() {
    console.log(this.user);
    this.UserSvc.create(this.user)
      .subscribe(resp => {
        this.resp = resp;
        console.log('User added ', this.resp);
        this.router.navigate(['/user/list']);
      });
  }

  constructor(private UserSvc: UserService,
    private router: Router) { }

  ngOnInit() {
  }

}
