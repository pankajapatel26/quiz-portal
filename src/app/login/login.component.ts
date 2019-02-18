import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMsg: string;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
  }

  login() : void {
    this.service.login(this.username, this.password)
	     .subscribe( data => {
			      console.log(data);
            let token = data.token;
            localStorage.setItem('token', token);
            localStorage.setItem('id', data.id);
            localStorage.setItem('loggedInUser', data.username);
            if(localStorage.getItem('token') != null){
              this.router.navigate(["/category"]);
            }
        },
        error => {
          this.errorMsg = "Login failed. Please check your username and password.";
          console.log(error)
        });
  }

}
