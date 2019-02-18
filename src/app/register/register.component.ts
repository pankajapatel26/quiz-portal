import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../shared/services/user.service';
class User {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
  }

  register() : void {
    this.service.registerUser(this.user)
	     .subscribe( data => {
              this.router.navigate(["/login"]);
        },
        error => {
          console.log(error)
        });
  }

}
