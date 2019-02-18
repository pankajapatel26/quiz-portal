import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuizService } from '../shared/services/quiz.service';

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.css']
})
export class UserResultComponent implements OnInit {
  sub : any;
  userId: number;
  resultHistory : any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: QuizService) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.userId = +params['id']; // (+) converts string 'id' to a number
    });
    this.getResult();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getResult() {
    this.service.getResult(this.userId).subscribe( data => {
        this.resultHistory = data;
    },
    error => {
      console.log(error)
    });
  }


}
