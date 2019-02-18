import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  token : any ;
  loggedInUser : string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.token = localStorage.getItem("token");
    this.loggedInUser = localStorage.getItem("loggedInUser");
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

}
